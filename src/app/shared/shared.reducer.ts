export interface Loadable {
  loading: boolean;
  success: boolean;
  error: any;
}

export const defaultLoadable = (): Loadable => ({
  loading: false,
  success: false,
  error: null,
});

export const onLoadableInit = (): Loadable => ({
  loading: true,
  success: false,
  error: null,
});

export const onLoadableSuccess = (): Loadable => ({
  loading: false,
  success: true,
  error: null,
});

export const onLoadableError = (error: any): Loadable => ({
  loading: false,
  success: false,
  error: error,
});
