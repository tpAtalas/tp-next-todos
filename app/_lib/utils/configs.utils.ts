type TypesObjectOnlyMessage = 'Only non-array object types are permitted as values within the initial object.';
type TypesDisallowArray<T, K extends keyof T, S> = T[K] extends Array<unknown>
  ? TypesObjectOnlyMessage
  : { [P in keyof T[K]]: S | T[K][P] };
type TypesOptions<T, S extends string> = {
  [K in keyof T]: T[K] extends object ? TypesDisallowArray<T, K, S> : TypesObjectOnlyMessage;
};
type TypesConfigs<T, P extends string> = {
  options: T;
  defaultOptions: Partial<{ [K in keyof T]: keyof T[K] | null | undefined }>;
  presetOptions?: Partial<Record<P, Partial<{ [K in keyof T]: keyof T[K] | null | undefined }>>>;
};

export const createConfigs = <T extends TypesOptions<T, S>, S extends string, P extends string = never>(
  config: TypesConfigs<T, P>,
): ((props?: Partial<{ [K in keyof T]: keyof T[K] } & { preset?: P }>) => {
  [K in keyof T]: T[K][keyof T[K]];
}) => {
  return (props?: Partial<{ [K in keyof T]: keyof T[K] } & { preset?: P }>): { [K in keyof T]: T[K][keyof T[K]] } => {
    const { defaultOptions, options, presetOptions } = config;

    const result: { [K in keyof T]?: T[K][keyof T[K]] | null } = {};
    const preset = props?.preset ? presetOptions?.[props.preset] : undefined;

    for (const key in options) {
      const k = key as keyof T;
      const getVariant = (k: keyof T) => {
        if (props?.hasOwnProperty(k)) return props[k];
        if (preset?.hasOwnProperty(k)) return preset[k] !== undefined ? preset[k] : defaultOptions[k];
        return defaultOptions[k];
      };
      const variant = getVariant(k);

      if (variant !== undefined && options[k].hasOwnProperty(variant as PropertyKey)) {
        result[k] = options[k][variant as keyof T[keyof T]];
      }
      if (variant === null) {
        result[k] = null;
      }
    }

    return result as { [K in keyof T]: T[K][keyof T[K]] };
  };
};

/**
 * Typescript
 *
 * Objects defined with `createConfigs` aromatically defines the types.
 * So it can be used with Wrapper like CreateConfigsProps
 * Make sure to use the `typeof`.
 * example:
 * const configSignInButton = createConfigs({...})
 * type PropsSignInButton = CreateConfigsProps<typeof configSignInButton>
 *
 * output: it will return all the types defined within the options.
 * */

export type ConfigsProps<T extends (...args: never[]) => unknown> = ReturnType<T>;
