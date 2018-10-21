declare class ModelBuilder<T> {
    min(): T;
    max(): T;
    mix(): T;
    fix(): T;
    list(size?: number): T[];
}
export default ModelBuilder;
