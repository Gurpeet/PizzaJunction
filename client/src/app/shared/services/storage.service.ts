export class StorageService {
    write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value);
    }

    read<T>(key: string): T {
        let value: string = sessionStorage.getItem(key);

        if (value && value !== 'undefined' && value !== 'null') {
            return <T>JSON.parse(value);
        }
        return null;
    }

    clear() {
        sessionStorage.clear();
    }

    removeItem(key: string) {
        sessionStorage.removeItem(key);
    }
}
