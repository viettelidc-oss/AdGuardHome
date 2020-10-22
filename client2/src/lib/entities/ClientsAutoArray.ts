// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IClientsAutoArray {
}

export default class ClientsAutoArray {
    constructor(props: IClientsAutoArray) {
    }

    serialize(): IClientsAutoArray {
        const data: IClientsAutoArray = {
        };
        return data;
    }

    validate(): string[] {
        const validateRequired = {
        };
        const isError: string[] = [];
        Object.keys(validateRequired).forEach((key) => {
            if (!(validateRequired as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IClientsAutoArray): ClientsAutoArray {
        return new ClientsAutoArray(props);
    }

    readonly keys: { [key: string]: string } = {
        }
;

    mergeDeepWith(props: Partial<ClientsAutoArray>): ClientsAutoArray {
        const updateData: Partial<IClientsAutoArray> = {};
        Object.keys(props).forEach((key: keyof ClientsAutoArray) => {
            const updateKey = this.keys[key] as keyof IClientsAutoArray;
            if ((props[key] as any).serialize) {
                (updateData[updateKey] as any) = (props[key] as any).serialize() as Pick<IClientsAutoArray, keyof IClientsAutoArray>;
            } else {
                (updateData[updateKey] as any) = props[key];
            }
        });
        return new ClientsAutoArray({ ...this.serialize(), ...updateData });
    }
}