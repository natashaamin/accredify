declare const _default: import("vue").DefineComponent<{
    progress: {
        type: NumberConstructor;
        required: true;
        validator: (v: number) => boolean;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    transitionDuration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    radius: import("vue").Ref<number>;
    center: import("vue").Ref<number>;
    circumference: import("vue").Ref<number>;
    offset: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        required: true;
        validator: (v: number) => boolean;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    transitionDuration: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    color: string;
    strokeWidth: number;
    transitionDuration: number;
    size: number;
}>;
export default _default;
