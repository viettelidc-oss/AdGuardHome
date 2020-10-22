// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICheckConfigStaticIpInfo {
    error?: string;
    ip?: string;
    static?: string;
}

export default class CheckConfigStaticIpInfo {
    readonly _error: string | undefined;

    /** */
    get error(): string | undefined {
        return this._error;
    }

    readonly _ip: string | undefined;

    /**
     * Description: Current dynamic IP address. Set if static=no
     * Example: 192.168.1.1
     */
    get ip(): string | undefined {
        return this._ip;
    }

    readonly _static: string | undefined;

    /**
     * Description: Can be: yes, no, error
     * Example: no
     */
    get static(): string | undefined {
        return this._static;
    }

    constructor(props: ICheckConfigStaticIpInfo) {
        if (typeof props.error === 'string') {
            this._error = props.error.trim();
        }
        if (typeof props.ip === 'string') {
            this._ip = props.ip.trim();
        }
        if (typeof props.static === 'string') {
            this._static = props.static.trim();
        }
    }

    serialize(): ICheckConfigStaticIpInfo {
        const data: ICheckConfigStaticIpInfo = {
        };
        if (typeof this._error !== 'undefined') {
            data.error = this._error;
        }
        if (typeof this._ip !== 'undefined') {
            data.ip = this._ip;
        }
        if (typeof this._static !== 'undefined') {
            data.static = this._static;
        }
        return data;
    }

    validate(): string[] {
        const validateRequired = {
            static: !this._static ? true : typeof this._static === 'string' && !this._static ? true : this._static,
            ip: !this._ip ? true : typeof this._ip === 'string' && !this._ip ? true : this._ip,
            error: !this._error ? true : typeof this._error === 'string' && !this._error ? true : this._error,
        };
        const isError: string[] = [];
        Object.keys(validateRequired).forEach((key) => {
            if (!(validateRequired as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: ICheckConfigStaticIpInfo): CheckConfigStaticIpInfo {
        return new CheckConfigStaticIpInfo(props);
    }

    readonly keys: { [key: string]: string } = {
        error: 'error',
        ip: 'ip',
        static: 'static',
        }
;

    mergeDeepWith(props: Partial<CheckConfigStaticIpInfo>): CheckConfigStaticIpInfo {
        const updateData: Partial<ICheckConfigStaticIpInfo> = {};
        Object.keys(props).forEach((key: keyof CheckConfigStaticIpInfo) => {
            const updateKey = this.keys[key] as keyof ICheckConfigStaticIpInfo;
            if ((props[key] as any).serialize) {
                (updateData[updateKey] as any) = (props[key] as any).serialize() as Pick<ICheckConfigStaticIpInfo, keyof ICheckConfigStaticIpInfo>;
            } else {
                (updateData[updateKey] as any) = props[key];
            }
        });
        return new CheckConfigStaticIpInfo({ ...this.serialize(), ...updateData });
    }
}