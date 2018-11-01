package upstream

import (
	"github.com/coredns/coredns/plugin"
	"github.com/miekg/dns"
	"github.com/pkg/errors"
	"golang.org/x/net/context"
	"time"
)

const (
	defaultTimeout = 5 * time.Second
)

// Upstream is a simplified interface for proxy destination
type Upstream interface {
	Exchange(ctx context.Context, query *dns.Msg) (*dns.Msg, error)
}

// UpstreamPlugin is a simplified DNS proxy using a generic upstream interface
type UpstreamPlugin struct {
	Upstreams []Upstream
	Next      plugin.Handler
}

// ServeDNS implements interface for CoreDNS plugin
func (p UpstreamPlugin) ServeDNS(ctx context.Context, w dns.ResponseWriter, r *dns.Msg) (int, error) {
	var reply *dns.Msg
	var backendErr error

	for _, upstream := range p.Upstreams {
		reply, backendErr = upstream.Exchange(ctx, r)
		if backendErr == nil {
			w.WriteMsg(reply)
			return 0, nil
		}
	}

	return dns.RcodeServerFailure, errors.Wrap(backendErr, "failed to contact any of the upstreams")
}

// Name implements interface for CoreDNS plugin
func (p UpstreamPlugin) Name() string { return "upstream" }
