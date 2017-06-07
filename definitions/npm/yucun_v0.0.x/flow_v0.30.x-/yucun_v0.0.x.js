declare module 'yucun' {
  declare module.exports: {
    version: string;
    encode(input: string): string;
    decode(input: string): string;
  };
}
