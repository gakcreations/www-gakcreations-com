export {};

type KlaviyoCallback<T = unknown> = (result: T) => void;

type KlaviyoAsyncMethod = (...args: [...unknown[], KlaviyoCallback?]) => Promise<unknown>;

interface KlaviyoClient {
  /**
   * Queue raw onsite commands.
   */
  push: (...args: unknown[]) => void;

  /**
   * Common onsite methods (still permissive for compatibility).
   */
  identify: KlaviyoAsyncMethod;
  track: KlaviyoAsyncMethod;
  openForm: KlaviyoAsyncMethod;
  closeForm: KlaviyoAsyncMethod;

  /**
   * Allow additional SDK methods while keeping known methods typed.
   */
  [method: string]: KlaviyoAsyncMethod | ((...args: unknown[]) => void);
}

declare global {
  interface Window {
    _klOnsite?: unknown[];
    klaviyo?: KlaviyoClient;
  }
}
