
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PhotoCard
 * 
 */
export type PhotoCard = $Result.DefaultSelection<Prisma.$PhotoCardPayload>
/**
 * Model UserPhotoCard
 * 
 */
export type UserPhotoCard = $Result.DefaultSelection<Prisma.$UserPhotoCardPayload>
/**
 * Model CardArticle
 * 
 */
export type CardArticle = $Result.DefaultSelection<Prisma.$CardArticlePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Exchange
 * 
 */
export type Exchange = $Result.DefaultSelection<Prisma.$ExchangePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RankList: {
  COMMON: 'COMMON',
  RARE: 'RARE',
  SUPERRARE: 'SUPERRARE',
  LEGENDARY: 'LEGENDARY'
};

export type RankList = (typeof RankList)[keyof typeof RankList]


export const Genre: {
  LANDSCAPE: 'LANDSCAPE',
  PORTRAIT: 'PORTRAIT',
  ANIMAL: 'ANIMAL',
  OBJECT: 'OBJECT',
  FOOD: 'FOOD',
  ETC: 'ETC'
};

export type Genre = (typeof Genre)[keyof typeof Genre]


export const UserPhotocardStatus: {
  OWNED: 'OWNED',
  SELLING: 'SELLING',
  EXCHANGE_REQUESTED: 'EXCHANGE_REQUESTED',
  SOLDOUT: 'SOLDOUT'
};

export type UserPhotocardStatus = (typeof UserPhotocardStatus)[keyof typeof UserPhotocardStatus]


export const ExchangeStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELED: 'CANCELED'
};

export type ExchangeStatus = (typeof ExchangeStatus)[keyof typeof ExchangeStatus]

}

export type RankList = $Enums.RankList

export const RankList: typeof $Enums.RankList

export type Genre = $Enums.Genre

export const Genre: typeof $Enums.Genre

export type UserPhotocardStatus = $Enums.UserPhotocardStatus

export const UserPhotocardStatus: typeof $Enums.UserPhotocardStatus

export type ExchangeStatus = $Enums.ExchangeStatus

export const ExchangeStatus: typeof $Enums.ExchangeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoCard`: Exposes CRUD operations for the **PhotoCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoCards
    * const photoCards = await prisma.photoCard.findMany()
    * ```
    */
  get photoCard(): Prisma.PhotoCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPhotoCard`: Exposes CRUD operations for the **UserPhotoCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPhotoCards
    * const userPhotoCards = await prisma.userPhotoCard.findMany()
    * ```
    */
  get userPhotoCard(): Prisma.UserPhotoCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardArticle`: Exposes CRUD operations for the **CardArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardArticles
    * const cardArticles = await prisma.cardArticle.findMany()
    * ```
    */
  get cardArticle(): Prisma.CardArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchange`: Exposes CRUD operations for the **Exchange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exchanges
    * const exchanges = await prisma.exchange.findMany()
    * ```
    */
  get exchange(): Prisma.ExchangeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Notification: 'Notification',
    PhotoCard: 'PhotoCard',
    UserPhotoCard: 'UserPhotoCard',
    CardArticle: 'CardArticle',
    Order: 'Order',
    Exchange: 'Exchange'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "notification" | "photoCard" | "userPhotoCard" | "cardArticle" | "order" | "exchange"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PhotoCard: {
        payload: Prisma.$PhotoCardPayload<ExtArgs>
        fields: Prisma.PhotoCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          findFirst: {
            args: Prisma.PhotoCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          findMany: {
            args: Prisma.PhotoCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>[]
          }
          create: {
            args: Prisma.PhotoCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          createMany: {
            args: Prisma.PhotoCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>[]
          }
          delete: {
            args: Prisma.PhotoCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          update: {
            args: Prisma.PhotoCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          deleteMany: {
            args: Prisma.PhotoCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>[]
          }
          upsert: {
            args: Prisma.PhotoCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoCardPayload>
          }
          aggregate: {
            args: Prisma.PhotoCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoCard>
          }
          groupBy: {
            args: Prisma.PhotoCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCardCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCardCountAggregateOutputType> | number
          }
        }
      }
      UserPhotoCard: {
        payload: Prisma.$UserPhotoCardPayload<ExtArgs>
        fields: Prisma.UserPhotoCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPhotoCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPhotoCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          findFirst: {
            args: Prisma.UserPhotoCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPhotoCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          findMany: {
            args: Prisma.UserPhotoCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>[]
          }
          create: {
            args: Prisma.UserPhotoCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          createMany: {
            args: Prisma.UserPhotoCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPhotoCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>[]
          }
          delete: {
            args: Prisma.UserPhotoCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          update: {
            args: Prisma.UserPhotoCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          deleteMany: {
            args: Prisma.UserPhotoCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPhotoCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPhotoCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>[]
          }
          upsert: {
            args: Prisma.UserPhotoCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPhotoCardPayload>
          }
          aggregate: {
            args: Prisma.UserPhotoCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPhotoCard>
          }
          groupBy: {
            args: Prisma.UserPhotoCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPhotoCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPhotoCardCountArgs<ExtArgs>
            result: $Utils.Optional<UserPhotoCardCountAggregateOutputType> | number
          }
        }
      }
      CardArticle: {
        payload: Prisma.$CardArticlePayload<ExtArgs>
        fields: Prisma.CardArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          findFirst: {
            args: Prisma.CardArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          findMany: {
            args: Prisma.CardArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>[]
          }
          create: {
            args: Prisma.CardArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          createMany: {
            args: Prisma.CardArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>[]
          }
          delete: {
            args: Prisma.CardArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          update: {
            args: Prisma.CardArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          deleteMany: {
            args: Prisma.CardArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>[]
          }
          upsert: {
            args: Prisma.CardArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardArticlePayload>
          }
          aggregate: {
            args: Prisma.CardArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardArticle>
          }
          groupBy: {
            args: Prisma.CardArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardArticleCountArgs<ExtArgs>
            result: $Utils.Optional<CardArticleCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Exchange: {
        payload: Prisma.$ExchangePayload<ExtArgs>
        fields: Prisma.ExchangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          findFirst: {
            args: Prisma.ExchangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          findMany: {
            args: Prisma.ExchangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>[]
          }
          create: {
            args: Prisma.ExchangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          createMany: {
            args: Prisma.ExchangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>[]
          }
          delete: {
            args: Prisma.ExchangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          update: {
            args: Prisma.ExchangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangePayload>
          }
          aggregate: {
            args: Prisma.ExchangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchange>
          }
          groupBy: {
            args: Prisma.ExchangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    notification?: NotificationOmit
    photoCard?: PhotoCardOmit
    userPhotoCard?: UserPhotoCardOmit
    cardArticle?: CardArticleOmit
    order?: OrderOmit
    exchange?: ExchangeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notification: number
    userPhotoCard: number
    order: number
    photoCard: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
    userPhotoCard?: boolean | UserCountOutputTypeCountUserPhotoCardArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
    photoCard?: boolean | UserCountOutputTypeCountPhotoCardArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPhotoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPhotoCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoCardWhereInput
  }


  /**
   * Count Type PhotoCardCountOutputType
   */

  export type PhotoCardCountOutputType = {
    userPhotoCard: number
    order: number
  }

  export type PhotoCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPhotoCard?: boolean | PhotoCardCountOutputTypeCountUserPhotoCardArgs
    order?: boolean | PhotoCardCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * PhotoCardCountOutputType without action
   */
  export type PhotoCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCardCountOutputType
     */
    select?: PhotoCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCardCountOutputType without action
   */
  export type PhotoCardCountOutputTypeCountUserPhotoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPhotoCardWhereInput
  }

  /**
   * PhotoCardCountOutputType without action
   */
  export type PhotoCardCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type UserPhotoCardCountOutputType
   */

  export type UserPhotoCardCountOutputType = {
    cardArticle: number
    order: number
    giver: number
    taker: number
  }

  export type UserPhotoCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardArticle?: boolean | UserPhotoCardCountOutputTypeCountCardArticleArgs
    order?: boolean | UserPhotoCardCountOutputTypeCountOrderArgs
    giver?: boolean | UserPhotoCardCountOutputTypeCountGiverArgs
    taker?: boolean | UserPhotoCardCountOutputTypeCountTakerArgs
  }

  // Custom InputTypes
  /**
   * UserPhotoCardCountOutputType without action
   */
  export type UserPhotoCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCardCountOutputType
     */
    select?: UserPhotoCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPhotoCardCountOutputType without action
   */
  export type UserPhotoCardCountOutputTypeCountCardArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardArticleWhereInput
  }

  /**
   * UserPhotoCardCountOutputType without action
   */
  export type UserPhotoCardCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserPhotoCardCountOutputType without action
   */
  export type UserPhotoCardCountOutputTypeCountGiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeWhereInput
  }

  /**
   * UserPhotoCardCountOutputType without action
   */
  export type UserPhotoCardCountOutputTypeCountTakerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    pointAmount: number | null
    createCount: number | null
  }

  export type UserSumAggregateOutputType = {
    pointAmount: number | null
    createCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nickname: string | null
    pointAmount: number | null
    createCount: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nickname: string | null
    pointAmount: number | null
    createCount: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nickname: number
    pointAmount: number
    createCount: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    pointAmount?: true
    createCount?: true
  }

  export type UserSumAggregateInputType = {
    pointAmount?: true
    createCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    pointAmount?: true
    createCount?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    pointAmount?: true
    createCount?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    pointAmount?: true
    createCount?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    pointAmount?: boolean
    createCount?: boolean
    createdAt?: boolean
    notification?: boolean | User$notificationArgs<ExtArgs>
    userPhotoCard?: boolean | User$userPhotoCardArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    photoCard?: boolean | User$photoCardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    pointAmount?: boolean
    createCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    pointAmount?: boolean
    createCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    pointAmount?: boolean
    createCount?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nickname" | "pointAmount" | "createCount" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | User$notificationArgs<ExtArgs>
    userPhotoCard?: boolean | User$userPhotoCardArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    photoCard?: boolean | User$photoCardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      userPhotoCard: Prisma.$UserPhotoCardPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
      photoCard: Prisma.$PhotoCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nickname: string
      pointAmount: number
      createCount: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends User$notificationArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPhotoCard<T extends User$userPhotoCardArgs<ExtArgs> = {}>(args?: Subset<T, User$userPhotoCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends User$orderArgs<ExtArgs> = {}>(args?: Subset<T, User$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photoCard<T extends User$photoCardArgs<ExtArgs> = {}>(args?: Subset<T, User$photoCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly pointAmount: FieldRef<"User", 'Int'>
    readonly createCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notification
   */
  export type User$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.userPhotoCard
   */
  export type User$userPhotoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    where?: UserPhotoCardWhereInput
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    cursor?: UserPhotoCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPhotoCardScalarFieldEnum | UserPhotoCardScalarFieldEnum[]
  }

  /**
   * User.order
   */
  export type User$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.photoCard
   */
  export type User$photoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    where?: PhotoCardWhereInput
    orderBy?: PhotoCardOrderByWithRelationInput | PhotoCardOrderByWithRelationInput[]
    cursor?: PhotoCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoCardScalarFieldEnum | PhotoCardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isRead: boolean | null
    message: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isRead: boolean | null
    message: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    isRead: number
    message: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
    message?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
    message?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    isRead?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    isRead: boolean
    message: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isRead?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    isRead?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isRead" | "message" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isRead: boolean
      message: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PhotoCard
   */

  export type AggregatePhotoCard = {
    _count: PhotoCardCountAggregateOutputType | null
    _avg: PhotoCardAvgAggregateOutputType | null
    _sum: PhotoCardSumAggregateOutputType | null
    _min: PhotoCardMinAggregateOutputType | null
    _max: PhotoCardMaxAggregateOutputType | null
  }

  export type PhotoCardAvgAggregateOutputType = {
    price: number | null
  }

  export type PhotoCardSumAggregateOutputType = {
    price: number | null
  }

  export type PhotoCardMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    rank: $Enums.RankList | null
    genre: $Enums.Genre | null
    price: number | null
    imgUrl: string | null
    creatorId: string | null
    createdAt: Date | null
  }

  export type PhotoCardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    rank: $Enums.RankList | null
    genre: $Enums.Genre | null
    price: number | null
    imgUrl: string | null
    creatorId: string | null
    createdAt: Date | null
  }

  export type PhotoCardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    rank: number
    genre: number
    price: number
    imgUrl: number
    creatorId: number
    createdAt: number
    _all: number
  }


  export type PhotoCardAvgAggregateInputType = {
    price?: true
  }

  export type PhotoCardSumAggregateInputType = {
    price?: true
  }

  export type PhotoCardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    rank?: true
    genre?: true
    price?: true
    imgUrl?: true
    creatorId?: true
    createdAt?: true
  }

  export type PhotoCardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    rank?: true
    genre?: true
    price?: true
    imgUrl?: true
    creatorId?: true
    createdAt?: true
  }

  export type PhotoCardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    rank?: true
    genre?: true
    price?: true
    imgUrl?: true
    creatorId?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCard to aggregate.
     */
    where?: PhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCards to fetch.
     */
    orderBy?: PhotoCardOrderByWithRelationInput | PhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoCards
    **/
    _count?: true | PhotoCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoCardMaxAggregateInputType
  }

  export type GetPhotoCardAggregateType<T extends PhotoCardAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoCard[P]>
      : GetScalarType<T[P], AggregatePhotoCard[P]>
  }




  export type PhotoCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoCardWhereInput
    orderBy?: PhotoCardOrderByWithAggregationInput | PhotoCardOrderByWithAggregationInput[]
    by: PhotoCardScalarFieldEnum[] | PhotoCardScalarFieldEnum
    having?: PhotoCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCardCountAggregateInputType | true
    _avg?: PhotoCardAvgAggregateInputType
    _sum?: PhotoCardSumAggregateInputType
    _min?: PhotoCardMinAggregateInputType
    _max?: PhotoCardMaxAggregateInputType
  }

  export type PhotoCardGroupByOutputType = {
    id: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    creatorId: string
    createdAt: Date
    _count: PhotoCardCountAggregateOutputType | null
    _avg: PhotoCardAvgAggregateOutputType | null
    _sum: PhotoCardSumAggregateOutputType | null
    _min: PhotoCardMinAggregateOutputType | null
    _max: PhotoCardMaxAggregateOutputType | null
  }

  type GetPhotoCardGroupByPayload<T extends PhotoCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoCardGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoCardGroupByOutputType[P]>
        }
      >
    >


  export type PhotoCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    rank?: boolean
    genre?: boolean
    price?: boolean
    imgUrl?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    userPhotoCard?: boolean | PhotoCard$userPhotoCardArgs<ExtArgs>
    order?: boolean | PhotoCard$orderArgs<ExtArgs>
    _count?: boolean | PhotoCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoCard"]>

  export type PhotoCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    rank?: boolean
    genre?: boolean
    price?: boolean
    imgUrl?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoCard"]>

  export type PhotoCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    rank?: boolean
    genre?: boolean
    price?: boolean
    imgUrl?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoCard"]>

  export type PhotoCardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    rank?: boolean
    genre?: boolean
    price?: boolean
    imgUrl?: boolean
    creatorId?: boolean
    createdAt?: boolean
  }

  export type PhotoCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "rank" | "genre" | "price" | "imgUrl" | "creatorId" | "createdAt", ExtArgs["result"]["photoCard"]>
  export type PhotoCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    userPhotoCard?: boolean | PhotoCard$userPhotoCardArgs<ExtArgs>
    order?: boolean | PhotoCard$orderArgs<ExtArgs>
    _count?: boolean | PhotoCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhotoCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoCard"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      userPhotoCard: Prisma.$UserPhotoCardPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      rank: $Enums.RankList
      genre: $Enums.Genre
      price: number
      imgUrl: string
      creatorId: string
      createdAt: Date
    }, ExtArgs["result"]["photoCard"]>
    composites: {}
  }

  type PhotoCardGetPayload<S extends boolean | null | undefined | PhotoCardDefaultArgs> = $Result.GetResult<Prisma.$PhotoCardPayload, S>

  type PhotoCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCardCountAggregateInputType | true
    }

  export interface PhotoCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoCard'], meta: { name: 'PhotoCard' } }
    /**
     * Find zero or one PhotoCard that matches the filter.
     * @param {PhotoCardFindUniqueArgs} args - Arguments to find a PhotoCard
     * @example
     * // Get one PhotoCard
     * const photoCard = await prisma.photoCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoCardFindUniqueArgs>(args: SelectSubset<T, PhotoCardFindUniqueArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoCardFindUniqueOrThrowArgs} args - Arguments to find a PhotoCard
     * @example
     * // Get one PhotoCard
     * const photoCard = await prisma.photoCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoCardFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardFindFirstArgs} args - Arguments to find a PhotoCard
     * @example
     * // Get one PhotoCard
     * const photoCard = await prisma.photoCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoCardFindFirstArgs>(args?: SelectSubset<T, PhotoCardFindFirstArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardFindFirstOrThrowArgs} args - Arguments to find a PhotoCard
     * @example
     * // Get one PhotoCard
     * const photoCard = await prisma.photoCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoCardFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoCards
     * const photoCards = await prisma.photoCard.findMany()
     * 
     * // Get first 10 PhotoCards
     * const photoCards = await prisma.photoCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoCardWithIdOnly = await prisma.photoCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoCardFindManyArgs>(args?: SelectSubset<T, PhotoCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoCard.
     * @param {PhotoCardCreateArgs} args - Arguments to create a PhotoCard.
     * @example
     * // Create one PhotoCard
     * const PhotoCard = await prisma.photoCard.create({
     *   data: {
     *     // ... data to create a PhotoCard
     *   }
     * })
     * 
     */
    create<T extends PhotoCardCreateArgs>(args: SelectSubset<T, PhotoCardCreateArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoCards.
     * @param {PhotoCardCreateManyArgs} args - Arguments to create many PhotoCards.
     * @example
     * // Create many PhotoCards
     * const photoCard = await prisma.photoCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCardCreateManyArgs>(args?: SelectSubset<T, PhotoCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoCards and returns the data saved in the database.
     * @param {PhotoCardCreateManyAndReturnArgs} args - Arguments to create many PhotoCards.
     * @example
     * // Create many PhotoCards
     * const photoCard = await prisma.photoCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoCards and only return the `id`
     * const photoCardWithIdOnly = await prisma.photoCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCardCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoCard.
     * @param {PhotoCardDeleteArgs} args - Arguments to delete one PhotoCard.
     * @example
     * // Delete one PhotoCard
     * const PhotoCard = await prisma.photoCard.delete({
     *   where: {
     *     // ... filter to delete one PhotoCard
     *   }
     * })
     * 
     */
    delete<T extends PhotoCardDeleteArgs>(args: SelectSubset<T, PhotoCardDeleteArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoCard.
     * @param {PhotoCardUpdateArgs} args - Arguments to update one PhotoCard.
     * @example
     * // Update one PhotoCard
     * const photoCard = await prisma.photoCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoCardUpdateArgs>(args: SelectSubset<T, PhotoCardUpdateArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoCards.
     * @param {PhotoCardDeleteManyArgs} args - Arguments to filter PhotoCards to delete.
     * @example
     * // Delete a few PhotoCards
     * const { count } = await prisma.photoCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoCardDeleteManyArgs>(args?: SelectSubset<T, PhotoCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoCards
     * const photoCard = await prisma.photoCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoCardUpdateManyArgs>(args: SelectSubset<T, PhotoCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoCards and returns the data updated in the database.
     * @param {PhotoCardUpdateManyAndReturnArgs} args - Arguments to update many PhotoCards.
     * @example
     * // Update many PhotoCards
     * const photoCard = await prisma.photoCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoCards and only return the `id`
     * const photoCardWithIdOnly = await prisma.photoCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoCardUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoCard.
     * @param {PhotoCardUpsertArgs} args - Arguments to update or create a PhotoCard.
     * @example
     * // Update or create a PhotoCard
     * const photoCard = await prisma.photoCard.upsert({
     *   create: {
     *     // ... data to create a PhotoCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoCard we want to update
     *   }
     * })
     */
    upsert<T extends PhotoCardUpsertArgs>(args: SelectSubset<T, PhotoCardUpsertArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardCountArgs} args - Arguments to filter PhotoCards to count.
     * @example
     * // Count the number of PhotoCards
     * const count = await prisma.photoCard.count({
     *   where: {
     *     // ... the filter for the PhotoCards we want to count
     *   }
     * })
    **/
    count<T extends PhotoCardCountArgs>(
      args?: Subset<T, PhotoCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoCardAggregateArgs>(args: Subset<T, PhotoCardAggregateArgs>): Prisma.PrismaPromise<GetPhotoCardAggregateType<T>>

    /**
     * Group by PhotoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoCardGroupByArgs['orderBy'] }
        : { orderBy?: PhotoCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoCard model
   */
  readonly fields: PhotoCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userPhotoCard<T extends PhotoCard$userPhotoCardArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCard$userPhotoCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends PhotoCard$orderArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCard$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoCard model
   */
  interface PhotoCardFieldRefs {
    readonly id: FieldRef<"PhotoCard", 'String'>
    readonly title: FieldRef<"PhotoCard", 'String'>
    readonly description: FieldRef<"PhotoCard", 'String'>
    readonly rank: FieldRef<"PhotoCard", 'RankList'>
    readonly genre: FieldRef<"PhotoCard", 'Genre'>
    readonly price: FieldRef<"PhotoCard", 'Int'>
    readonly imgUrl: FieldRef<"PhotoCard", 'String'>
    readonly creatorId: FieldRef<"PhotoCard", 'String'>
    readonly createdAt: FieldRef<"PhotoCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoCard findUnique
   */
  export type PhotoCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCard to fetch.
     */
    where: PhotoCardWhereUniqueInput
  }

  /**
   * PhotoCard findUniqueOrThrow
   */
  export type PhotoCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCard to fetch.
     */
    where: PhotoCardWhereUniqueInput
  }

  /**
   * PhotoCard findFirst
   */
  export type PhotoCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCard to fetch.
     */
    where?: PhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCards to fetch.
     */
    orderBy?: PhotoCardOrderByWithRelationInput | PhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCards.
     */
    cursor?: PhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCards.
     */
    distinct?: PhotoCardScalarFieldEnum | PhotoCardScalarFieldEnum[]
  }

  /**
   * PhotoCard findFirstOrThrow
   */
  export type PhotoCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCard to fetch.
     */
    where?: PhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCards to fetch.
     */
    orderBy?: PhotoCardOrderByWithRelationInput | PhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoCards.
     */
    cursor?: PhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoCards.
     */
    distinct?: PhotoCardScalarFieldEnum | PhotoCardScalarFieldEnum[]
  }

  /**
   * PhotoCard findMany
   */
  export type PhotoCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which PhotoCards to fetch.
     */
    where?: PhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoCards to fetch.
     */
    orderBy?: PhotoCardOrderByWithRelationInput | PhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoCards.
     */
    cursor?: PhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoCards.
     */
    skip?: number
    distinct?: PhotoCardScalarFieldEnum | PhotoCardScalarFieldEnum[]
  }

  /**
   * PhotoCard create
   */
  export type PhotoCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoCard.
     */
    data: XOR<PhotoCardCreateInput, PhotoCardUncheckedCreateInput>
  }

  /**
   * PhotoCard createMany
   */
  export type PhotoCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoCards.
     */
    data: PhotoCardCreateManyInput | PhotoCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoCard createManyAndReturn
   */
  export type PhotoCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoCards.
     */
    data: PhotoCardCreateManyInput | PhotoCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoCard update
   */
  export type PhotoCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoCard.
     */
    data: XOR<PhotoCardUpdateInput, PhotoCardUncheckedUpdateInput>
    /**
     * Choose, which PhotoCard to update.
     */
    where: PhotoCardWhereUniqueInput
  }

  /**
   * PhotoCard updateMany
   */
  export type PhotoCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoCards.
     */
    data: XOR<PhotoCardUpdateManyMutationInput, PhotoCardUncheckedUpdateManyInput>
    /**
     * Filter which PhotoCards to update
     */
    where?: PhotoCardWhereInput
    /**
     * Limit how many PhotoCards to update.
     */
    limit?: number
  }

  /**
   * PhotoCard updateManyAndReturn
   */
  export type PhotoCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * The data used to update PhotoCards.
     */
    data: XOR<PhotoCardUpdateManyMutationInput, PhotoCardUncheckedUpdateManyInput>
    /**
     * Filter which PhotoCards to update
     */
    where?: PhotoCardWhereInput
    /**
     * Limit how many PhotoCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoCard upsert
   */
  export type PhotoCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoCard to update in case it exists.
     */
    where: PhotoCardWhereUniqueInput
    /**
     * In case the PhotoCard found by the `where` argument doesn't exist, create a new PhotoCard with this data.
     */
    create: XOR<PhotoCardCreateInput, PhotoCardUncheckedCreateInput>
    /**
     * In case the PhotoCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoCardUpdateInput, PhotoCardUncheckedUpdateInput>
  }

  /**
   * PhotoCard delete
   */
  export type PhotoCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
    /**
     * Filter which PhotoCard to delete.
     */
    where: PhotoCardWhereUniqueInput
  }

  /**
   * PhotoCard deleteMany
   */
  export type PhotoCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoCards to delete
     */
    where?: PhotoCardWhereInput
    /**
     * Limit how many PhotoCards to delete.
     */
    limit?: number
  }

  /**
   * PhotoCard.userPhotoCard
   */
  export type PhotoCard$userPhotoCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    where?: UserPhotoCardWhereInput
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    cursor?: UserPhotoCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPhotoCardScalarFieldEnum | UserPhotoCardScalarFieldEnum[]
  }

  /**
   * PhotoCard.order
   */
  export type PhotoCard$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * PhotoCard without action
   */
  export type PhotoCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoCard
     */
    select?: PhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoCard
     */
    omit?: PhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoCardInclude<ExtArgs> | null
  }


  /**
   * Model UserPhotoCard
   */

  export type AggregateUserPhotoCard = {
    _count: UserPhotoCardCountAggregateOutputType | null
    _avg: UserPhotoCardAvgAggregateOutputType | null
    _sum: UserPhotoCardSumAggregateOutputType | null
    _min: UserPhotoCardMinAggregateOutputType | null
    _max: UserPhotoCardMaxAggregateOutputType | null
  }

  export type UserPhotoCardAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type UserPhotoCardSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type UserPhotoCardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    photoCardId: string | null
    quantity: number | null
    price: number | null
    status: $Enums.UserPhotocardStatus | null
  }

  export type UserPhotoCardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    photoCardId: string | null
    quantity: number | null
    price: number | null
    status: $Enums.UserPhotocardStatus | null
  }

  export type UserPhotoCardCountAggregateOutputType = {
    id: number
    userId: number
    photoCardId: number
    quantity: number
    price: number
    status: number
    _all: number
  }


  export type UserPhotoCardAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type UserPhotoCardSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type UserPhotoCardMinAggregateInputType = {
    id?: true
    userId?: true
    photoCardId?: true
    quantity?: true
    price?: true
    status?: true
  }

  export type UserPhotoCardMaxAggregateInputType = {
    id?: true
    userId?: true
    photoCardId?: true
    quantity?: true
    price?: true
    status?: true
  }

  export type UserPhotoCardCountAggregateInputType = {
    id?: true
    userId?: true
    photoCardId?: true
    quantity?: true
    price?: true
    status?: true
    _all?: true
  }

  export type UserPhotoCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPhotoCard to aggregate.
     */
    where?: UserPhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPhotoCards to fetch.
     */
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPhotoCards
    **/
    _count?: true | UserPhotoCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPhotoCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPhotoCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPhotoCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPhotoCardMaxAggregateInputType
  }

  export type GetUserPhotoCardAggregateType<T extends UserPhotoCardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPhotoCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPhotoCard[P]>
      : GetScalarType<T[P], AggregateUserPhotoCard[P]>
  }




  export type UserPhotoCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPhotoCardWhereInput
    orderBy?: UserPhotoCardOrderByWithAggregationInput | UserPhotoCardOrderByWithAggregationInput[]
    by: UserPhotoCardScalarFieldEnum[] | UserPhotoCardScalarFieldEnum
    having?: UserPhotoCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPhotoCardCountAggregateInputType | true
    _avg?: UserPhotoCardAvgAggregateInputType
    _sum?: UserPhotoCardSumAggregateInputType
    _min?: UserPhotoCardMinAggregateInputType
    _max?: UserPhotoCardMaxAggregateInputType
  }

  export type UserPhotoCardGroupByOutputType = {
    id: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    _count: UserPhotoCardCountAggregateOutputType | null
    _avg: UserPhotoCardAvgAggregateOutputType | null
    _sum: UserPhotoCardSumAggregateOutputType | null
    _min: UserPhotoCardMinAggregateOutputType | null
    _max: UserPhotoCardMaxAggregateOutputType | null
  }

  type GetUserPhotoCardGroupByPayload<T extends UserPhotoCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPhotoCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPhotoCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPhotoCardGroupByOutputType[P]>
            : GetScalarType<T[P], UserPhotoCardGroupByOutputType[P]>
        }
      >
    >


  export type UserPhotoCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    photoCardId?: boolean
    quantity?: boolean
    price?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
    cardArticle?: boolean | UserPhotoCard$cardArticleArgs<ExtArgs>
    order?: boolean | UserPhotoCard$orderArgs<ExtArgs>
    giver?: boolean | UserPhotoCard$giverArgs<ExtArgs>
    taker?: boolean | UserPhotoCard$takerArgs<ExtArgs>
    _count?: boolean | UserPhotoCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPhotoCard"]>

  export type UserPhotoCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    photoCardId?: boolean
    quantity?: boolean
    price?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPhotoCard"]>

  export type UserPhotoCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    photoCardId?: boolean
    quantity?: boolean
    price?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPhotoCard"]>

  export type UserPhotoCardSelectScalar = {
    id?: boolean
    userId?: boolean
    photoCardId?: boolean
    quantity?: boolean
    price?: boolean
    status?: boolean
  }

  export type UserPhotoCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "photoCardId" | "quantity" | "price" | "status", ExtArgs["result"]["userPhotoCard"]>
  export type UserPhotoCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
    cardArticle?: boolean | UserPhotoCard$cardArticleArgs<ExtArgs>
    order?: boolean | UserPhotoCard$orderArgs<ExtArgs>
    giver?: boolean | UserPhotoCard$giverArgs<ExtArgs>
    taker?: boolean | UserPhotoCard$takerArgs<ExtArgs>
    _count?: boolean | UserPhotoCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPhotoCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }
  export type UserPhotoCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    photoCard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }

  export type $UserPhotoCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPhotoCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      photoCard: Prisma.$PhotoCardPayload<ExtArgs>
      cardArticle: Prisma.$CardArticlePayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
      giver: Prisma.$ExchangePayload<ExtArgs>[]
      taker: Prisma.$ExchangePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      photoCardId: string
      quantity: number
      price: number
      status: $Enums.UserPhotocardStatus
    }, ExtArgs["result"]["userPhotoCard"]>
    composites: {}
  }

  type UserPhotoCardGetPayload<S extends boolean | null | undefined | UserPhotoCardDefaultArgs> = $Result.GetResult<Prisma.$UserPhotoCardPayload, S>

  type UserPhotoCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPhotoCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPhotoCardCountAggregateInputType | true
    }

  export interface UserPhotoCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPhotoCard'], meta: { name: 'UserPhotoCard' } }
    /**
     * Find zero or one UserPhotoCard that matches the filter.
     * @param {UserPhotoCardFindUniqueArgs} args - Arguments to find a UserPhotoCard
     * @example
     * // Get one UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPhotoCardFindUniqueArgs>(args: SelectSubset<T, UserPhotoCardFindUniqueArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPhotoCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPhotoCardFindUniqueOrThrowArgs} args - Arguments to find a UserPhotoCard
     * @example
     * // Get one UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPhotoCardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPhotoCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPhotoCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardFindFirstArgs} args - Arguments to find a UserPhotoCard
     * @example
     * // Get one UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPhotoCardFindFirstArgs>(args?: SelectSubset<T, UserPhotoCardFindFirstArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPhotoCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardFindFirstOrThrowArgs} args - Arguments to find a UserPhotoCard
     * @example
     * // Get one UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPhotoCardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPhotoCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPhotoCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPhotoCards
     * const userPhotoCards = await prisma.userPhotoCard.findMany()
     * 
     * // Get first 10 UserPhotoCards
     * const userPhotoCards = await prisma.userPhotoCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPhotoCardWithIdOnly = await prisma.userPhotoCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPhotoCardFindManyArgs>(args?: SelectSubset<T, UserPhotoCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPhotoCard.
     * @param {UserPhotoCardCreateArgs} args - Arguments to create a UserPhotoCard.
     * @example
     * // Create one UserPhotoCard
     * const UserPhotoCard = await prisma.userPhotoCard.create({
     *   data: {
     *     // ... data to create a UserPhotoCard
     *   }
     * })
     * 
     */
    create<T extends UserPhotoCardCreateArgs>(args: SelectSubset<T, UserPhotoCardCreateArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPhotoCards.
     * @param {UserPhotoCardCreateManyArgs} args - Arguments to create many UserPhotoCards.
     * @example
     * // Create many UserPhotoCards
     * const userPhotoCard = await prisma.userPhotoCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPhotoCardCreateManyArgs>(args?: SelectSubset<T, UserPhotoCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPhotoCards and returns the data saved in the database.
     * @param {UserPhotoCardCreateManyAndReturnArgs} args - Arguments to create many UserPhotoCards.
     * @example
     * // Create many UserPhotoCards
     * const userPhotoCard = await prisma.userPhotoCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPhotoCards and only return the `id`
     * const userPhotoCardWithIdOnly = await prisma.userPhotoCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPhotoCardCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPhotoCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPhotoCard.
     * @param {UserPhotoCardDeleteArgs} args - Arguments to delete one UserPhotoCard.
     * @example
     * // Delete one UserPhotoCard
     * const UserPhotoCard = await prisma.userPhotoCard.delete({
     *   where: {
     *     // ... filter to delete one UserPhotoCard
     *   }
     * })
     * 
     */
    delete<T extends UserPhotoCardDeleteArgs>(args: SelectSubset<T, UserPhotoCardDeleteArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPhotoCard.
     * @param {UserPhotoCardUpdateArgs} args - Arguments to update one UserPhotoCard.
     * @example
     * // Update one UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPhotoCardUpdateArgs>(args: SelectSubset<T, UserPhotoCardUpdateArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPhotoCards.
     * @param {UserPhotoCardDeleteManyArgs} args - Arguments to filter UserPhotoCards to delete.
     * @example
     * // Delete a few UserPhotoCards
     * const { count } = await prisma.userPhotoCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPhotoCardDeleteManyArgs>(args?: SelectSubset<T, UserPhotoCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPhotoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPhotoCards
     * const userPhotoCard = await prisma.userPhotoCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPhotoCardUpdateManyArgs>(args: SelectSubset<T, UserPhotoCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPhotoCards and returns the data updated in the database.
     * @param {UserPhotoCardUpdateManyAndReturnArgs} args - Arguments to update many UserPhotoCards.
     * @example
     * // Update many UserPhotoCards
     * const userPhotoCard = await prisma.userPhotoCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPhotoCards and only return the `id`
     * const userPhotoCardWithIdOnly = await prisma.userPhotoCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPhotoCardUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPhotoCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPhotoCard.
     * @param {UserPhotoCardUpsertArgs} args - Arguments to update or create a UserPhotoCard.
     * @example
     * // Update or create a UserPhotoCard
     * const userPhotoCard = await prisma.userPhotoCard.upsert({
     *   create: {
     *     // ... data to create a UserPhotoCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPhotoCard we want to update
     *   }
     * })
     */
    upsert<T extends UserPhotoCardUpsertArgs>(args: SelectSubset<T, UserPhotoCardUpsertArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPhotoCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardCountArgs} args - Arguments to filter UserPhotoCards to count.
     * @example
     * // Count the number of UserPhotoCards
     * const count = await prisma.userPhotoCard.count({
     *   where: {
     *     // ... the filter for the UserPhotoCards we want to count
     *   }
     * })
    **/
    count<T extends UserPhotoCardCountArgs>(
      args?: Subset<T, UserPhotoCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPhotoCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPhotoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPhotoCardAggregateArgs>(args: Subset<T, UserPhotoCardAggregateArgs>): Prisma.PrismaPromise<GetUserPhotoCardAggregateType<T>>

    /**
     * Group by UserPhotoCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPhotoCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPhotoCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPhotoCardGroupByArgs['orderBy'] }
        : { orderBy?: UserPhotoCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPhotoCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPhotoCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPhotoCard model
   */
  readonly fields: UserPhotoCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPhotoCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPhotoCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photoCard<T extends PhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCardDefaultArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cardArticle<T extends UserPhotoCard$cardArticleArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCard$cardArticleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends UserPhotoCard$orderArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCard$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giver<T extends UserPhotoCard$giverArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCard$giverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taker<T extends UserPhotoCard$takerArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCard$takerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPhotoCard model
   */
  interface UserPhotoCardFieldRefs {
    readonly id: FieldRef<"UserPhotoCard", 'String'>
    readonly userId: FieldRef<"UserPhotoCard", 'String'>
    readonly photoCardId: FieldRef<"UserPhotoCard", 'String'>
    readonly quantity: FieldRef<"UserPhotoCard", 'Int'>
    readonly price: FieldRef<"UserPhotoCard", 'Int'>
    readonly status: FieldRef<"UserPhotoCard", 'UserPhotocardStatus'>
  }
    

  // Custom InputTypes
  /**
   * UserPhotoCard findUnique
   */
  export type UserPhotoCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which UserPhotoCard to fetch.
     */
    where: UserPhotoCardWhereUniqueInput
  }

  /**
   * UserPhotoCard findUniqueOrThrow
   */
  export type UserPhotoCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which UserPhotoCard to fetch.
     */
    where: UserPhotoCardWhereUniqueInput
  }

  /**
   * UserPhotoCard findFirst
   */
  export type UserPhotoCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which UserPhotoCard to fetch.
     */
    where?: UserPhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPhotoCards to fetch.
     */
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPhotoCards.
     */
    cursor?: UserPhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPhotoCards.
     */
    distinct?: UserPhotoCardScalarFieldEnum | UserPhotoCardScalarFieldEnum[]
  }

  /**
   * UserPhotoCard findFirstOrThrow
   */
  export type UserPhotoCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which UserPhotoCard to fetch.
     */
    where?: UserPhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPhotoCards to fetch.
     */
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPhotoCards.
     */
    cursor?: UserPhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPhotoCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPhotoCards.
     */
    distinct?: UserPhotoCardScalarFieldEnum | UserPhotoCardScalarFieldEnum[]
  }

  /**
   * UserPhotoCard findMany
   */
  export type UserPhotoCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter, which UserPhotoCards to fetch.
     */
    where?: UserPhotoCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPhotoCards to fetch.
     */
    orderBy?: UserPhotoCardOrderByWithRelationInput | UserPhotoCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPhotoCards.
     */
    cursor?: UserPhotoCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPhotoCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPhotoCards.
     */
    skip?: number
    distinct?: UserPhotoCardScalarFieldEnum | UserPhotoCardScalarFieldEnum[]
  }

  /**
   * UserPhotoCard create
   */
  export type UserPhotoCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPhotoCard.
     */
    data: XOR<UserPhotoCardCreateInput, UserPhotoCardUncheckedCreateInput>
  }

  /**
   * UserPhotoCard createMany
   */
  export type UserPhotoCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPhotoCards.
     */
    data: UserPhotoCardCreateManyInput | UserPhotoCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPhotoCard createManyAndReturn
   */
  export type UserPhotoCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * The data used to create many UserPhotoCards.
     */
    data: UserPhotoCardCreateManyInput | UserPhotoCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPhotoCard update
   */
  export type UserPhotoCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPhotoCard.
     */
    data: XOR<UserPhotoCardUpdateInput, UserPhotoCardUncheckedUpdateInput>
    /**
     * Choose, which UserPhotoCard to update.
     */
    where: UserPhotoCardWhereUniqueInput
  }

  /**
   * UserPhotoCard updateMany
   */
  export type UserPhotoCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPhotoCards.
     */
    data: XOR<UserPhotoCardUpdateManyMutationInput, UserPhotoCardUncheckedUpdateManyInput>
    /**
     * Filter which UserPhotoCards to update
     */
    where?: UserPhotoCardWhereInput
    /**
     * Limit how many UserPhotoCards to update.
     */
    limit?: number
  }

  /**
   * UserPhotoCard updateManyAndReturn
   */
  export type UserPhotoCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * The data used to update UserPhotoCards.
     */
    data: XOR<UserPhotoCardUpdateManyMutationInput, UserPhotoCardUncheckedUpdateManyInput>
    /**
     * Filter which UserPhotoCards to update
     */
    where?: UserPhotoCardWhereInput
    /**
     * Limit how many UserPhotoCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPhotoCard upsert
   */
  export type UserPhotoCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPhotoCard to update in case it exists.
     */
    where: UserPhotoCardWhereUniqueInput
    /**
     * In case the UserPhotoCard found by the `where` argument doesn't exist, create a new UserPhotoCard with this data.
     */
    create: XOR<UserPhotoCardCreateInput, UserPhotoCardUncheckedCreateInput>
    /**
     * In case the UserPhotoCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPhotoCardUpdateInput, UserPhotoCardUncheckedUpdateInput>
  }

  /**
   * UserPhotoCard delete
   */
  export type UserPhotoCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
    /**
     * Filter which UserPhotoCard to delete.
     */
    where: UserPhotoCardWhereUniqueInput
  }

  /**
   * UserPhotoCard deleteMany
   */
  export type UserPhotoCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPhotoCards to delete
     */
    where?: UserPhotoCardWhereInput
    /**
     * Limit how many UserPhotoCards to delete.
     */
    limit?: number
  }

  /**
   * UserPhotoCard.cardArticle
   */
  export type UserPhotoCard$cardArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    where?: CardArticleWhereInput
    orderBy?: CardArticleOrderByWithRelationInput | CardArticleOrderByWithRelationInput[]
    cursor?: CardArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardArticleScalarFieldEnum | CardArticleScalarFieldEnum[]
  }

  /**
   * UserPhotoCard.order
   */
  export type UserPhotoCard$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * UserPhotoCard.giver
   */
  export type UserPhotoCard$giverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    where?: ExchangeWhereInput
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    cursor?: ExchangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * UserPhotoCard.taker
   */
  export type UserPhotoCard$takerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    where?: ExchangeWhereInput
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    cursor?: ExchangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * UserPhotoCard without action
   */
  export type UserPhotoCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoCard
     */
    select?: UserPhotoCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPhotoCard
     */
    omit?: UserPhotoCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPhotoCardInclude<ExtArgs> | null
  }


  /**
   * Model CardArticle
   */

  export type AggregateCardArticle = {
    _count: CardArticleCountAggregateOutputType | null
    _avg: CardArticleAvgAggregateOutputType | null
    _sum: CardArticleSumAggregateOutputType | null
    _min: CardArticleMinAggregateOutputType | null
    _max: CardArticleMaxAggregateOutputType | null
  }

  export type CardArticleAvgAggregateOutputType = {
    price: number | null
    totalQuantity: number | null
    remainingQuantity: number | null
  }

  export type CardArticleSumAggregateOutputType = {
    price: number | null
    totalQuantity: number | null
    remainingQuantity: number | null
  }

  export type CardArticleMinAggregateOutputType = {
    id: string | null
    price: number | null
    totalQuantity: number | null
    remainingQuantity: number | null
    exchangeText: string | null
    exchangeRank: $Enums.RankList | null
    exchangeGenre: $Enums.Genre | null
    userPhotoCardId: string | null
    createdAt: Date | null
  }

  export type CardArticleMaxAggregateOutputType = {
    id: string | null
    price: number | null
    totalQuantity: number | null
    remainingQuantity: number | null
    exchangeText: string | null
    exchangeRank: $Enums.RankList | null
    exchangeGenre: $Enums.Genre | null
    userPhotoCardId: string | null
    createdAt: Date | null
  }

  export type CardArticleCountAggregateOutputType = {
    id: number
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: number
    exchangeRank: number
    exchangeGenre: number
    userPhotoCardId: number
    createdAt: number
    _all: number
  }


  export type CardArticleAvgAggregateInputType = {
    price?: true
    totalQuantity?: true
    remainingQuantity?: true
  }

  export type CardArticleSumAggregateInputType = {
    price?: true
    totalQuantity?: true
    remainingQuantity?: true
  }

  export type CardArticleMinAggregateInputType = {
    id?: true
    price?: true
    totalQuantity?: true
    remainingQuantity?: true
    exchangeText?: true
    exchangeRank?: true
    exchangeGenre?: true
    userPhotoCardId?: true
    createdAt?: true
  }

  export type CardArticleMaxAggregateInputType = {
    id?: true
    price?: true
    totalQuantity?: true
    remainingQuantity?: true
    exchangeText?: true
    exchangeRank?: true
    exchangeGenre?: true
    userPhotoCardId?: true
    createdAt?: true
  }

  export type CardArticleCountAggregateInputType = {
    id?: true
    price?: true
    totalQuantity?: true
    remainingQuantity?: true
    exchangeText?: true
    exchangeRank?: true
    exchangeGenre?: true
    userPhotoCardId?: true
    createdAt?: true
    _all?: true
  }

  export type CardArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardArticle to aggregate.
     */
    where?: CardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardArticles to fetch.
     */
    orderBy?: CardArticleOrderByWithRelationInput | CardArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardArticles
    **/
    _count?: true | CardArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardArticleMaxAggregateInputType
  }

  export type GetCardArticleAggregateType<T extends CardArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateCardArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardArticle[P]>
      : GetScalarType<T[P], AggregateCardArticle[P]>
  }




  export type CardArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardArticleWhereInput
    orderBy?: CardArticleOrderByWithAggregationInput | CardArticleOrderByWithAggregationInput[]
    by: CardArticleScalarFieldEnum[] | CardArticleScalarFieldEnum
    having?: CardArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardArticleCountAggregateInputType | true
    _avg?: CardArticleAvgAggregateInputType
    _sum?: CardArticleSumAggregateInputType
    _min?: CardArticleMinAggregateInputType
    _max?: CardArticleMaxAggregateInputType
  }

  export type CardArticleGroupByOutputType = {
    id: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    userPhotoCardId: string
    createdAt: Date
    _count: CardArticleCountAggregateOutputType | null
    _avg: CardArticleAvgAggregateOutputType | null
    _sum: CardArticleSumAggregateOutputType | null
    _min: CardArticleMinAggregateOutputType | null
    _max: CardArticleMaxAggregateOutputType | null
  }

  type GetCardArticleGroupByPayload<T extends CardArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardArticleGroupByOutputType[P]>
            : GetScalarType<T[P], CardArticleGroupByOutputType[P]>
        }
      >
    >


  export type CardArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    totalQuantity?: boolean
    remainingQuantity?: boolean
    exchangeText?: boolean
    exchangeRank?: boolean
    exchangeGenre?: boolean
    userPhotoCardId?: boolean
    createdAt?: boolean
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardArticle"]>

  export type CardArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    totalQuantity?: boolean
    remainingQuantity?: boolean
    exchangeText?: boolean
    exchangeRank?: boolean
    exchangeGenre?: boolean
    userPhotoCardId?: boolean
    createdAt?: boolean
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardArticle"]>

  export type CardArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    totalQuantity?: boolean
    remainingQuantity?: boolean
    exchangeText?: boolean
    exchangeRank?: boolean
    exchangeGenre?: boolean
    userPhotoCardId?: boolean
    createdAt?: boolean
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardArticle"]>

  export type CardArticleSelectScalar = {
    id?: boolean
    price?: boolean
    totalQuantity?: boolean
    remainingQuantity?: boolean
    exchangeText?: boolean
    exchangeRank?: boolean
    exchangeGenre?: boolean
    userPhotoCardId?: boolean
    createdAt?: boolean
  }

  export type CardArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "totalQuantity" | "remainingQuantity" | "exchangeText" | "exchangeRank" | "exchangeGenre" | "userPhotoCardId" | "createdAt", ExtArgs["result"]["cardArticle"]>
  export type CardArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }
  export type CardArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }
  export type CardArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPhotoCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }

  export type $CardArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardArticle"
    objects: {
      userPhotoCard: Prisma.$UserPhotoCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      totalQuantity: number
      remainingQuantity: number
      exchangeText: string
      exchangeRank: $Enums.RankList
      exchangeGenre: $Enums.Genre
      userPhotoCardId: string
      createdAt: Date
    }, ExtArgs["result"]["cardArticle"]>
    composites: {}
  }

  type CardArticleGetPayload<S extends boolean | null | undefined | CardArticleDefaultArgs> = $Result.GetResult<Prisma.$CardArticlePayload, S>

  type CardArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardArticleCountAggregateInputType | true
    }

  export interface CardArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardArticle'], meta: { name: 'CardArticle' } }
    /**
     * Find zero or one CardArticle that matches the filter.
     * @param {CardArticleFindUniqueArgs} args - Arguments to find a CardArticle
     * @example
     * // Get one CardArticle
     * const cardArticle = await prisma.cardArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardArticleFindUniqueArgs>(args: SelectSubset<T, CardArticleFindUniqueArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardArticleFindUniqueOrThrowArgs} args - Arguments to find a CardArticle
     * @example
     * // Get one CardArticle
     * const cardArticle = await prisma.cardArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, CardArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleFindFirstArgs} args - Arguments to find a CardArticle
     * @example
     * // Get one CardArticle
     * const cardArticle = await prisma.cardArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardArticleFindFirstArgs>(args?: SelectSubset<T, CardArticleFindFirstArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleFindFirstOrThrowArgs} args - Arguments to find a CardArticle
     * @example
     * // Get one CardArticle
     * const cardArticle = await prisma.cardArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, CardArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardArticles
     * const cardArticles = await prisma.cardArticle.findMany()
     * 
     * // Get first 10 CardArticles
     * const cardArticles = await prisma.cardArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardArticleWithIdOnly = await prisma.cardArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardArticleFindManyArgs>(args?: SelectSubset<T, CardArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardArticle.
     * @param {CardArticleCreateArgs} args - Arguments to create a CardArticle.
     * @example
     * // Create one CardArticle
     * const CardArticle = await prisma.cardArticle.create({
     *   data: {
     *     // ... data to create a CardArticle
     *   }
     * })
     * 
     */
    create<T extends CardArticleCreateArgs>(args: SelectSubset<T, CardArticleCreateArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardArticles.
     * @param {CardArticleCreateManyArgs} args - Arguments to create many CardArticles.
     * @example
     * // Create many CardArticles
     * const cardArticle = await prisma.cardArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardArticleCreateManyArgs>(args?: SelectSubset<T, CardArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardArticles and returns the data saved in the database.
     * @param {CardArticleCreateManyAndReturnArgs} args - Arguments to create many CardArticles.
     * @example
     * // Create many CardArticles
     * const cardArticle = await prisma.cardArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardArticles and only return the `id`
     * const cardArticleWithIdOnly = await prisma.cardArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, CardArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardArticle.
     * @param {CardArticleDeleteArgs} args - Arguments to delete one CardArticle.
     * @example
     * // Delete one CardArticle
     * const CardArticle = await prisma.cardArticle.delete({
     *   where: {
     *     // ... filter to delete one CardArticle
     *   }
     * })
     * 
     */
    delete<T extends CardArticleDeleteArgs>(args: SelectSubset<T, CardArticleDeleteArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardArticle.
     * @param {CardArticleUpdateArgs} args - Arguments to update one CardArticle.
     * @example
     * // Update one CardArticle
     * const cardArticle = await prisma.cardArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardArticleUpdateArgs>(args: SelectSubset<T, CardArticleUpdateArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardArticles.
     * @param {CardArticleDeleteManyArgs} args - Arguments to filter CardArticles to delete.
     * @example
     * // Delete a few CardArticles
     * const { count } = await prisma.cardArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardArticleDeleteManyArgs>(args?: SelectSubset<T, CardArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardArticles
     * const cardArticle = await prisma.cardArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardArticleUpdateManyArgs>(args: SelectSubset<T, CardArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardArticles and returns the data updated in the database.
     * @param {CardArticleUpdateManyAndReturnArgs} args - Arguments to update many CardArticles.
     * @example
     * // Update many CardArticles
     * const cardArticle = await prisma.cardArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardArticles and only return the `id`
     * const cardArticleWithIdOnly = await prisma.cardArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, CardArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardArticle.
     * @param {CardArticleUpsertArgs} args - Arguments to update or create a CardArticle.
     * @example
     * // Update or create a CardArticle
     * const cardArticle = await prisma.cardArticle.upsert({
     *   create: {
     *     // ... data to create a CardArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardArticle we want to update
     *   }
     * })
     */
    upsert<T extends CardArticleUpsertArgs>(args: SelectSubset<T, CardArticleUpsertArgs<ExtArgs>>): Prisma__CardArticleClient<$Result.GetResult<Prisma.$CardArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleCountArgs} args - Arguments to filter CardArticles to count.
     * @example
     * // Count the number of CardArticles
     * const count = await prisma.cardArticle.count({
     *   where: {
     *     // ... the filter for the CardArticles we want to count
     *   }
     * })
    **/
    count<T extends CardArticleCountArgs>(
      args?: Subset<T, CardArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardArticleAggregateArgs>(args: Subset<T, CardArticleAggregateArgs>): Prisma.PrismaPromise<GetCardArticleAggregateType<T>>

    /**
     * Group by CardArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardArticleGroupByArgs['orderBy'] }
        : { orderBy?: CardArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardArticle model
   */
  readonly fields: CardArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPhotoCard<T extends UserPhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCardDefaultArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CardArticle model
   */
  interface CardArticleFieldRefs {
    readonly id: FieldRef<"CardArticle", 'String'>
    readonly price: FieldRef<"CardArticle", 'Int'>
    readonly totalQuantity: FieldRef<"CardArticle", 'Int'>
    readonly remainingQuantity: FieldRef<"CardArticle", 'Int'>
    readonly exchangeText: FieldRef<"CardArticle", 'String'>
    readonly exchangeRank: FieldRef<"CardArticle", 'RankList'>
    readonly exchangeGenre: FieldRef<"CardArticle", 'Genre'>
    readonly userPhotoCardId: FieldRef<"CardArticle", 'String'>
    readonly createdAt: FieldRef<"CardArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CardArticle findUnique
   */
  export type CardArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter, which CardArticle to fetch.
     */
    where: CardArticleWhereUniqueInput
  }

  /**
   * CardArticle findUniqueOrThrow
   */
  export type CardArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter, which CardArticle to fetch.
     */
    where: CardArticleWhereUniqueInput
  }

  /**
   * CardArticle findFirst
   */
  export type CardArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter, which CardArticle to fetch.
     */
    where?: CardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardArticles to fetch.
     */
    orderBy?: CardArticleOrderByWithRelationInput | CardArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardArticles.
     */
    cursor?: CardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardArticles.
     */
    distinct?: CardArticleScalarFieldEnum | CardArticleScalarFieldEnum[]
  }

  /**
   * CardArticle findFirstOrThrow
   */
  export type CardArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter, which CardArticle to fetch.
     */
    where?: CardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardArticles to fetch.
     */
    orderBy?: CardArticleOrderByWithRelationInput | CardArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardArticles.
     */
    cursor?: CardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardArticles.
     */
    distinct?: CardArticleScalarFieldEnum | CardArticleScalarFieldEnum[]
  }

  /**
   * CardArticle findMany
   */
  export type CardArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter, which CardArticles to fetch.
     */
    where?: CardArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardArticles to fetch.
     */
    orderBy?: CardArticleOrderByWithRelationInput | CardArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardArticles.
     */
    cursor?: CardArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardArticles.
     */
    skip?: number
    distinct?: CardArticleScalarFieldEnum | CardArticleScalarFieldEnum[]
  }

  /**
   * CardArticle create
   */
  export type CardArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a CardArticle.
     */
    data: XOR<CardArticleCreateInput, CardArticleUncheckedCreateInput>
  }

  /**
   * CardArticle createMany
   */
  export type CardArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardArticles.
     */
    data: CardArticleCreateManyInput | CardArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardArticle createManyAndReturn
   */
  export type CardArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * The data used to create many CardArticles.
     */
    data: CardArticleCreateManyInput | CardArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardArticle update
   */
  export type CardArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a CardArticle.
     */
    data: XOR<CardArticleUpdateInput, CardArticleUncheckedUpdateInput>
    /**
     * Choose, which CardArticle to update.
     */
    where: CardArticleWhereUniqueInput
  }

  /**
   * CardArticle updateMany
   */
  export type CardArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardArticles.
     */
    data: XOR<CardArticleUpdateManyMutationInput, CardArticleUncheckedUpdateManyInput>
    /**
     * Filter which CardArticles to update
     */
    where?: CardArticleWhereInput
    /**
     * Limit how many CardArticles to update.
     */
    limit?: number
  }

  /**
   * CardArticle updateManyAndReturn
   */
  export type CardArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * The data used to update CardArticles.
     */
    data: XOR<CardArticleUpdateManyMutationInput, CardArticleUncheckedUpdateManyInput>
    /**
     * Filter which CardArticles to update
     */
    where?: CardArticleWhereInput
    /**
     * Limit how many CardArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardArticle upsert
   */
  export type CardArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the CardArticle to update in case it exists.
     */
    where: CardArticleWhereUniqueInput
    /**
     * In case the CardArticle found by the `where` argument doesn't exist, create a new CardArticle with this data.
     */
    create: XOR<CardArticleCreateInput, CardArticleUncheckedCreateInput>
    /**
     * In case the CardArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardArticleUpdateInput, CardArticleUncheckedUpdateInput>
  }

  /**
   * CardArticle delete
   */
  export type CardArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
    /**
     * Filter which CardArticle to delete.
     */
    where: CardArticleWhereUniqueInput
  }

  /**
   * CardArticle deleteMany
   */
  export type CardArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardArticles to delete
     */
    where?: CardArticleWhereInput
    /**
     * Limit how many CardArticles to delete.
     */
    limit?: number
  }

  /**
   * CardArticle without action
   */
  export type CardArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardArticle
     */
    select?: CardArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardArticle
     */
    omit?: CardArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardArticleInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    totalPrice: number | null
    userPhotoCardId: string | null
    userId: string | null
    photoCardId: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: number | null
    totalPrice: number | null
    userPhotoCardId: string | null
    userId: string | null
    photoCardId: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: number
    userId: number
    photoCardId: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    quantity?: true
    price?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    quantity?: true
    price?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    totalPrice?: true
    userPhotoCardId?: true
    userId?: true
    photoCardId?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    totalPrice?: true
    userPhotoCardId?: true
    userId?: true
    photoCardId?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    totalPrice?: true
    userPhotoCardId?: true
    userId?: true
    photoCardId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    userId: string
    photoCardId: string
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    totalPrice?: boolean
    userPhotoCardId?: boolean
    userId?: boolean
    photoCardId?: boolean
    createdAt?: boolean
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    totalPrice?: boolean
    userPhotoCardId?: boolean
    userId?: boolean
    photoCardId?: boolean
    createdAt?: boolean
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    totalPrice?: boolean
    userPhotoCardId?: boolean
    userId?: boolean
    photoCardId?: boolean
    createdAt?: boolean
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    totalPrice?: boolean
    userPhotoCardId?: boolean
    userId?: boolean
    photoCardId?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "totalPrice" | "userPhotoCardId" | "userId" | "photoCardId" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    photocard?: boolean | PhotoCardDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      buyer: Prisma.$UserPhotoCardPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      photocard: Prisma.$PhotoCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      price: number
      totalPrice: number
      userPhotoCardId: string
      userId: string
      photoCardId: string
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends UserPhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCardDefaultArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photocard<T extends PhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoCardDefaultArgs<ExtArgs>>): Prisma__PhotoCardClient<$Result.GetResult<Prisma.$PhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly price: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Int'>
    readonly userPhotoCardId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly photoCardId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Exchange
   */

  export type AggregateExchange = {
    _count: ExchangeCountAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  export type ExchangeMinAggregateOutputType = {
    id: string | null
    giverCardId: string | null
    takerCardId: string | null
    description: string | null
    status: $Enums.ExchangeStatus | null
    createdAt: Date | null
  }

  export type ExchangeMaxAggregateOutputType = {
    id: string | null
    giverCardId: string | null
    takerCardId: string | null
    description: string | null
    status: $Enums.ExchangeStatus | null
    createdAt: Date | null
  }

  export type ExchangeCountAggregateOutputType = {
    id: number
    giverCardId: number
    takerCardId: number
    description: number
    status: number
    createdAt: number
    _all: number
  }


  export type ExchangeMinAggregateInputType = {
    id?: true
    giverCardId?: true
    takerCardId?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type ExchangeMaxAggregateInputType = {
    id?: true
    giverCardId?: true
    takerCardId?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type ExchangeCountAggregateInputType = {
    id?: true
    giverCardId?: true
    takerCardId?: true
    description?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ExchangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exchange to aggregate.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exchanges
    **/
    _count?: true | ExchangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeMaxAggregateInputType
  }

  export type GetExchangeAggregateType<T extends ExchangeAggregateArgs> = {
        [P in keyof T & keyof AggregateExchange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchange[P]>
      : GetScalarType<T[P], AggregateExchange[P]>
  }




  export type ExchangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeWhereInput
    orderBy?: ExchangeOrderByWithAggregationInput | ExchangeOrderByWithAggregationInput[]
    by: ExchangeScalarFieldEnum[] | ExchangeScalarFieldEnum
    having?: ExchangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeCountAggregateInputType | true
    _min?: ExchangeMinAggregateInputType
    _max?: ExchangeMaxAggregateInputType
  }

  export type ExchangeGroupByOutputType = {
    id: string
    giverCardId: string
    takerCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt: Date
    _count: ExchangeCountAggregateOutputType | null
    _min: ExchangeMinAggregateOutputType | null
    _max: ExchangeMaxAggregateOutputType | null
  }

  type GetExchangeGroupByPayload<T extends ExchangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    giverCardId?: boolean
    takerCardId?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange"]>

  export type ExchangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    giverCardId?: boolean
    takerCardId?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange"]>

  export type ExchangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    giverCardId?: boolean
    takerCardId?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange"]>

  export type ExchangeSelectScalar = {
    id?: boolean
    giverCardId?: boolean
    takerCardId?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ExchangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "giverCardId" | "takerCardId" | "description" | "status" | "createdAt", ExtArgs["result"]["exchange"]>
  export type ExchangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }
  export type ExchangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }
  export type ExchangeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giverCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
    takerCard?: boolean | UserPhotoCardDefaultArgs<ExtArgs>
  }

  export type $ExchangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exchange"
    objects: {
      giverCard: Prisma.$UserPhotoCardPayload<ExtArgs>
      takerCard: Prisma.$UserPhotoCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      giverCardId: string
      takerCardId: string
      description: string
      status: $Enums.ExchangeStatus
      createdAt: Date
    }, ExtArgs["result"]["exchange"]>
    composites: {}
  }

  type ExchangeGetPayload<S extends boolean | null | undefined | ExchangeDefaultArgs> = $Result.GetResult<Prisma.$ExchangePayload, S>

  type ExchangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeCountAggregateInputType | true
    }

  export interface ExchangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exchange'], meta: { name: 'Exchange' } }
    /**
     * Find zero or one Exchange that matches the filter.
     * @param {ExchangeFindUniqueArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeFindUniqueArgs>(args: SelectSubset<T, ExchangeFindUniqueArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exchange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeFindUniqueOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exchange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindFirstArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeFindFirstArgs>(args?: SelectSubset<T, ExchangeFindFirstArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exchange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindFirstOrThrowArgs} args - Arguments to find a Exchange
     * @example
     * // Get one Exchange
     * const exchange = await prisma.exchange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exchanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exchanges
     * const exchanges = await prisma.exchange.findMany()
     * 
     * // Get first 10 Exchanges
     * const exchanges = await prisma.exchange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeWithIdOnly = await prisma.exchange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeFindManyArgs>(args?: SelectSubset<T, ExchangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exchange.
     * @param {ExchangeCreateArgs} args - Arguments to create a Exchange.
     * @example
     * // Create one Exchange
     * const Exchange = await prisma.exchange.create({
     *   data: {
     *     // ... data to create a Exchange
     *   }
     * })
     * 
     */
    create<T extends ExchangeCreateArgs>(args: SelectSubset<T, ExchangeCreateArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exchanges.
     * @param {ExchangeCreateManyArgs} args - Arguments to create many Exchanges.
     * @example
     * // Create many Exchanges
     * const exchange = await prisma.exchange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeCreateManyArgs>(args?: SelectSubset<T, ExchangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exchanges and returns the data saved in the database.
     * @param {ExchangeCreateManyAndReturnArgs} args - Arguments to create many Exchanges.
     * @example
     * // Create many Exchanges
     * const exchange = await prisma.exchange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exchanges and only return the `id`
     * const exchangeWithIdOnly = await prisma.exchange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exchange.
     * @param {ExchangeDeleteArgs} args - Arguments to delete one Exchange.
     * @example
     * // Delete one Exchange
     * const Exchange = await prisma.exchange.delete({
     *   where: {
     *     // ... filter to delete one Exchange
     *   }
     * })
     * 
     */
    delete<T extends ExchangeDeleteArgs>(args: SelectSubset<T, ExchangeDeleteArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exchange.
     * @param {ExchangeUpdateArgs} args - Arguments to update one Exchange.
     * @example
     * // Update one Exchange
     * const exchange = await prisma.exchange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeUpdateArgs>(args: SelectSubset<T, ExchangeUpdateArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exchanges.
     * @param {ExchangeDeleteManyArgs} args - Arguments to filter Exchanges to delete.
     * @example
     * // Delete a few Exchanges
     * const { count } = await prisma.exchange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeDeleteManyArgs>(args?: SelectSubset<T, ExchangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exchanges
     * const exchange = await prisma.exchange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeUpdateManyArgs>(args: SelectSubset<T, ExchangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchanges and returns the data updated in the database.
     * @param {ExchangeUpdateManyAndReturnArgs} args - Arguments to update many Exchanges.
     * @example
     * // Update many Exchanges
     * const exchange = await prisma.exchange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exchanges and only return the `id`
     * const exchangeWithIdOnly = await prisma.exchange.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExchangeUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exchange.
     * @param {ExchangeUpsertArgs} args - Arguments to update or create a Exchange.
     * @example
     * // Update or create a Exchange
     * const exchange = await prisma.exchange.upsert({
     *   create: {
     *     // ... data to create a Exchange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exchange we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeUpsertArgs>(args: SelectSubset<T, ExchangeUpsertArgs<ExtArgs>>): Prisma__ExchangeClient<$Result.GetResult<Prisma.$ExchangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exchanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeCountArgs} args - Arguments to filter Exchanges to count.
     * @example
     * // Count the number of Exchanges
     * const count = await prisma.exchange.count({
     *   where: {
     *     // ... the filter for the Exchanges we want to count
     *   }
     * })
    **/
    count<T extends ExchangeCountArgs>(
      args?: Subset<T, ExchangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeAggregateArgs>(args: Subset<T, ExchangeAggregateArgs>): Prisma.PrismaPromise<GetExchangeAggregateType<T>>

    /**
     * Group by Exchange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exchange model
   */
  readonly fields: ExchangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exchange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    giverCard<T extends UserPhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCardDefaultArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    takerCard<T extends UserPhotoCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPhotoCardDefaultArgs<ExtArgs>>): Prisma__UserPhotoCardClient<$Result.GetResult<Prisma.$UserPhotoCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exchange model
   */
  interface ExchangeFieldRefs {
    readonly id: FieldRef<"Exchange", 'String'>
    readonly giverCardId: FieldRef<"Exchange", 'String'>
    readonly takerCardId: FieldRef<"Exchange", 'String'>
    readonly description: FieldRef<"Exchange", 'String'>
    readonly status: FieldRef<"Exchange", 'ExchangeStatus'>
    readonly createdAt: FieldRef<"Exchange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exchange findUnique
   */
  export type ExchangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter, which Exchange to fetch.
     */
    where: ExchangeWhereUniqueInput
  }

  /**
   * Exchange findUniqueOrThrow
   */
  export type ExchangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter, which Exchange to fetch.
     */
    where: ExchangeWhereUniqueInput
  }

  /**
   * Exchange findFirst
   */
  export type ExchangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter, which Exchange to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exchanges.
     */
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * Exchange findFirstOrThrow
   */
  export type ExchangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter, which Exchange to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exchanges.
     */
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * Exchange findMany
   */
  export type ExchangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter, which Exchanges to fetch.
     */
    where?: ExchangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exchanges to fetch.
     */
    orderBy?: ExchangeOrderByWithRelationInput | ExchangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exchanges.
     */
    cursor?: ExchangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exchanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exchanges.
     */
    skip?: number
    distinct?: ExchangeScalarFieldEnum | ExchangeScalarFieldEnum[]
  }

  /**
   * Exchange create
   */
  export type ExchangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * The data needed to create a Exchange.
     */
    data: XOR<ExchangeCreateInput, ExchangeUncheckedCreateInput>
  }

  /**
   * Exchange createMany
   */
  export type ExchangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exchanges.
     */
    data: ExchangeCreateManyInput | ExchangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exchange createManyAndReturn
   */
  export type ExchangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * The data used to create many Exchanges.
     */
    data: ExchangeCreateManyInput | ExchangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exchange update
   */
  export type ExchangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * The data needed to update a Exchange.
     */
    data: XOR<ExchangeUpdateInput, ExchangeUncheckedUpdateInput>
    /**
     * Choose, which Exchange to update.
     */
    where: ExchangeWhereUniqueInput
  }

  /**
   * Exchange updateMany
   */
  export type ExchangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exchanges.
     */
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyInput>
    /**
     * Filter which Exchanges to update
     */
    where?: ExchangeWhereInput
    /**
     * Limit how many Exchanges to update.
     */
    limit?: number
  }

  /**
   * Exchange updateManyAndReturn
   */
  export type ExchangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * The data used to update Exchanges.
     */
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyInput>
    /**
     * Filter which Exchanges to update
     */
    where?: ExchangeWhereInput
    /**
     * Limit how many Exchanges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exchange upsert
   */
  export type ExchangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * The filter to search for the Exchange to update in case it exists.
     */
    where: ExchangeWhereUniqueInput
    /**
     * In case the Exchange found by the `where` argument doesn't exist, create a new Exchange with this data.
     */
    create: XOR<ExchangeCreateInput, ExchangeUncheckedCreateInput>
    /**
     * In case the Exchange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeUpdateInput, ExchangeUncheckedUpdateInput>
  }

  /**
   * Exchange delete
   */
  export type ExchangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
    /**
     * Filter which Exchange to delete.
     */
    where: ExchangeWhereUniqueInput
  }

  /**
   * Exchange deleteMany
   */
  export type ExchangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exchanges to delete
     */
    where?: ExchangeWhereInput
    /**
     * Limit how many Exchanges to delete.
     */
    limit?: number
  }

  /**
   * Exchange without action
   */
  export type ExchangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exchange
     */
    select?: ExchangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exchange
     */
    omit?: ExchangeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    pointAmount: 'pointAmount',
    createCount: 'createCount',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isRead: 'isRead',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PhotoCardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    rank: 'rank',
    genre: 'genre',
    price: 'price',
    imgUrl: 'imgUrl',
    creatorId: 'creatorId',
    createdAt: 'createdAt'
  };

  export type PhotoCardScalarFieldEnum = (typeof PhotoCardScalarFieldEnum)[keyof typeof PhotoCardScalarFieldEnum]


  export const UserPhotoCardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    photoCardId: 'photoCardId',
    quantity: 'quantity',
    price: 'price',
    status: 'status'
  };

  export type UserPhotoCardScalarFieldEnum = (typeof UserPhotoCardScalarFieldEnum)[keyof typeof UserPhotoCardScalarFieldEnum]


  export const CardArticleScalarFieldEnum: {
    id: 'id',
    price: 'price',
    totalQuantity: 'totalQuantity',
    remainingQuantity: 'remainingQuantity',
    exchangeText: 'exchangeText',
    exchangeRank: 'exchangeRank',
    exchangeGenre: 'exchangeGenre',
    userPhotoCardId: 'userPhotoCardId',
    createdAt: 'createdAt'
  };

  export type CardArticleScalarFieldEnum = (typeof CardArticleScalarFieldEnum)[keyof typeof CardArticleScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    totalPrice: 'totalPrice',
    userPhotoCardId: 'userPhotoCardId',
    userId: 'userId',
    photoCardId: 'photoCardId',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ExchangeScalarFieldEnum: {
    id: 'id',
    giverCardId: 'giverCardId',
    takerCardId: 'takerCardId',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ExchangeScalarFieldEnum = (typeof ExchangeScalarFieldEnum)[keyof typeof ExchangeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RankList'
   */
  export type EnumRankListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RankList'>
    


  /**
   * Reference to a field of type 'RankList[]'
   */
  export type ListEnumRankListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RankList[]'>
    


  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre'>
    


  /**
   * Reference to a field of type 'Genre[]'
   */
  export type ListEnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre[]'>
    


  /**
   * Reference to a field of type 'UserPhotocardStatus'
   */
  export type EnumUserPhotocardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPhotocardStatus'>
    


  /**
   * Reference to a field of type 'UserPhotocardStatus[]'
   */
  export type ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPhotocardStatus[]'>
    


  /**
   * Reference to a field of type 'ExchangeStatus'
   */
  export type EnumExchangeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExchangeStatus'>
    


  /**
   * Reference to a field of type 'ExchangeStatus[]'
   */
  export type ListEnumExchangeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExchangeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    pointAmount?: IntFilter<"User"> | number
    createCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    notification?: NotificationListRelationFilter
    userPhotoCard?: UserPhotoCardListRelationFilter
    order?: OrderListRelationFilter
    photoCard?: PhotoCardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    pointAmount?: SortOrder
    createCount?: SortOrder
    createdAt?: SortOrder
    notification?: NotificationOrderByRelationAggregateInput
    userPhotoCard?: UserPhotoCardOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
    photoCard?: PhotoCardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    pointAmount?: IntFilter<"User"> | number
    createCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    notification?: NotificationListRelationFilter
    userPhotoCard?: UserPhotoCardListRelationFilter
    order?: OrderListRelationFilter
    photoCard?: PhotoCardListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    pointAmount?: SortOrder
    createCount?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    pointAmount?: IntWithAggregatesFilter<"User"> | number
    createCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PhotoCardWhereInput = {
    AND?: PhotoCardWhereInput | PhotoCardWhereInput[]
    OR?: PhotoCardWhereInput[]
    NOT?: PhotoCardWhereInput | PhotoCardWhereInput[]
    id?: StringFilter<"PhotoCard"> | string
    title?: StringFilter<"PhotoCard"> | string
    description?: StringFilter<"PhotoCard"> | string
    rank?: EnumRankListFilter<"PhotoCard"> | $Enums.RankList
    genre?: EnumGenreFilter<"PhotoCard"> | $Enums.Genre
    price?: IntFilter<"PhotoCard"> | number
    imgUrl?: StringFilter<"PhotoCard"> | string
    creatorId?: StringFilter<"PhotoCard"> | string
    createdAt?: DateTimeFilter<"PhotoCard"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    userPhotoCard?: UserPhotoCardListRelationFilter
    order?: OrderListRelationFilter
  }

  export type PhotoCardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    userPhotoCard?: UserPhotoCardOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type PhotoCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoCardWhereInput | PhotoCardWhereInput[]
    OR?: PhotoCardWhereInput[]
    NOT?: PhotoCardWhereInput | PhotoCardWhereInput[]
    title?: StringFilter<"PhotoCard"> | string
    description?: StringFilter<"PhotoCard"> | string
    rank?: EnumRankListFilter<"PhotoCard"> | $Enums.RankList
    genre?: EnumGenreFilter<"PhotoCard"> | $Enums.Genre
    price?: IntFilter<"PhotoCard"> | number
    imgUrl?: StringFilter<"PhotoCard"> | string
    creatorId?: StringFilter<"PhotoCard"> | string
    createdAt?: DateTimeFilter<"PhotoCard"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    userPhotoCard?: UserPhotoCardListRelationFilter
    order?: OrderListRelationFilter
  }, "id">

  export type PhotoCardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    _count?: PhotoCardCountOrderByAggregateInput
    _avg?: PhotoCardAvgOrderByAggregateInput
    _max?: PhotoCardMaxOrderByAggregateInput
    _min?: PhotoCardMinOrderByAggregateInput
    _sum?: PhotoCardSumOrderByAggregateInput
  }

  export type PhotoCardScalarWhereWithAggregatesInput = {
    AND?: PhotoCardScalarWhereWithAggregatesInput | PhotoCardScalarWhereWithAggregatesInput[]
    OR?: PhotoCardScalarWhereWithAggregatesInput[]
    NOT?: PhotoCardScalarWhereWithAggregatesInput | PhotoCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoCard"> | string
    title?: StringWithAggregatesFilter<"PhotoCard"> | string
    description?: StringWithAggregatesFilter<"PhotoCard"> | string
    rank?: EnumRankListWithAggregatesFilter<"PhotoCard"> | $Enums.RankList
    genre?: EnumGenreWithAggregatesFilter<"PhotoCard"> | $Enums.Genre
    price?: IntWithAggregatesFilter<"PhotoCard"> | number
    imgUrl?: StringWithAggregatesFilter<"PhotoCard"> | string
    creatorId?: StringWithAggregatesFilter<"PhotoCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhotoCard"> | Date | string
  }

  export type UserPhotoCardWhereInput = {
    AND?: UserPhotoCardWhereInput | UserPhotoCardWhereInput[]
    OR?: UserPhotoCardWhereInput[]
    NOT?: UserPhotoCardWhereInput | UserPhotoCardWhereInput[]
    id?: StringFilter<"UserPhotoCard"> | string
    userId?: StringFilter<"UserPhotoCard"> | string
    photoCardId?: StringFilter<"UserPhotoCard"> | string
    quantity?: IntFilter<"UserPhotoCard"> | number
    price?: IntFilter<"UserPhotoCard"> | number
    status?: EnumUserPhotocardStatusFilter<"UserPhotoCard"> | $Enums.UserPhotocardStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photoCard?: XOR<PhotoCardScalarRelationFilter, PhotoCardWhereInput>
    cardArticle?: CardArticleListRelationFilter
    order?: OrderListRelationFilter
    giver?: ExchangeListRelationFilter
    taker?: ExchangeListRelationFilter
  }

  export type UserPhotoCardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    photoCard?: PhotoCardOrderByWithRelationInput
    cardArticle?: CardArticleOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
    giver?: ExchangeOrderByRelationAggregateInput
    taker?: ExchangeOrderByRelationAggregateInput
  }

  export type UserPhotoCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPhotoCardWhereInput | UserPhotoCardWhereInput[]
    OR?: UserPhotoCardWhereInput[]
    NOT?: UserPhotoCardWhereInput | UserPhotoCardWhereInput[]
    userId?: StringFilter<"UserPhotoCard"> | string
    photoCardId?: StringFilter<"UserPhotoCard"> | string
    quantity?: IntFilter<"UserPhotoCard"> | number
    price?: IntFilter<"UserPhotoCard"> | number
    status?: EnumUserPhotocardStatusFilter<"UserPhotoCard"> | $Enums.UserPhotocardStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    photoCard?: XOR<PhotoCardScalarRelationFilter, PhotoCardWhereInput>
    cardArticle?: CardArticleListRelationFilter
    order?: OrderListRelationFilter
    giver?: ExchangeListRelationFilter
    taker?: ExchangeListRelationFilter
  }, "id">

  export type UserPhotoCardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    status?: SortOrder
    _count?: UserPhotoCardCountOrderByAggregateInput
    _avg?: UserPhotoCardAvgOrderByAggregateInput
    _max?: UserPhotoCardMaxOrderByAggregateInput
    _min?: UserPhotoCardMinOrderByAggregateInput
    _sum?: UserPhotoCardSumOrderByAggregateInput
  }

  export type UserPhotoCardScalarWhereWithAggregatesInput = {
    AND?: UserPhotoCardScalarWhereWithAggregatesInput | UserPhotoCardScalarWhereWithAggregatesInput[]
    OR?: UserPhotoCardScalarWhereWithAggregatesInput[]
    NOT?: UserPhotoCardScalarWhereWithAggregatesInput | UserPhotoCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPhotoCard"> | string
    userId?: StringWithAggregatesFilter<"UserPhotoCard"> | string
    photoCardId?: StringWithAggregatesFilter<"UserPhotoCard"> | string
    quantity?: IntWithAggregatesFilter<"UserPhotoCard"> | number
    price?: IntWithAggregatesFilter<"UserPhotoCard"> | number
    status?: EnumUserPhotocardStatusWithAggregatesFilter<"UserPhotoCard"> | $Enums.UserPhotocardStatus
  }

  export type CardArticleWhereInput = {
    AND?: CardArticleWhereInput | CardArticleWhereInput[]
    OR?: CardArticleWhereInput[]
    NOT?: CardArticleWhereInput | CardArticleWhereInput[]
    id?: StringFilter<"CardArticle"> | string
    price?: IntFilter<"CardArticle"> | number
    totalQuantity?: IntFilter<"CardArticle"> | number
    remainingQuantity?: IntFilter<"CardArticle"> | number
    exchangeText?: StringFilter<"CardArticle"> | string
    exchangeRank?: EnumRankListFilter<"CardArticle"> | $Enums.RankList
    exchangeGenre?: EnumGenreFilter<"CardArticle"> | $Enums.Genre
    userPhotoCardId?: StringFilter<"CardArticle"> | string
    createdAt?: DateTimeFilter<"CardArticle"> | Date | string
    userPhotoCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
  }

  export type CardArticleOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
    exchangeText?: SortOrder
    exchangeRank?: SortOrder
    exchangeGenre?: SortOrder
    userPhotoCardId?: SortOrder
    createdAt?: SortOrder
    userPhotoCard?: UserPhotoCardOrderByWithRelationInput
  }

  export type CardArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardArticleWhereInput | CardArticleWhereInput[]
    OR?: CardArticleWhereInput[]
    NOT?: CardArticleWhereInput | CardArticleWhereInput[]
    price?: IntFilter<"CardArticle"> | number
    totalQuantity?: IntFilter<"CardArticle"> | number
    remainingQuantity?: IntFilter<"CardArticle"> | number
    exchangeText?: StringFilter<"CardArticle"> | string
    exchangeRank?: EnumRankListFilter<"CardArticle"> | $Enums.RankList
    exchangeGenre?: EnumGenreFilter<"CardArticle"> | $Enums.Genre
    userPhotoCardId?: StringFilter<"CardArticle"> | string
    createdAt?: DateTimeFilter<"CardArticle"> | Date | string
    userPhotoCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
  }, "id">

  export type CardArticleOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
    exchangeText?: SortOrder
    exchangeRank?: SortOrder
    exchangeGenre?: SortOrder
    userPhotoCardId?: SortOrder
    createdAt?: SortOrder
    _count?: CardArticleCountOrderByAggregateInput
    _avg?: CardArticleAvgOrderByAggregateInput
    _max?: CardArticleMaxOrderByAggregateInput
    _min?: CardArticleMinOrderByAggregateInput
    _sum?: CardArticleSumOrderByAggregateInput
  }

  export type CardArticleScalarWhereWithAggregatesInput = {
    AND?: CardArticleScalarWhereWithAggregatesInput | CardArticleScalarWhereWithAggregatesInput[]
    OR?: CardArticleScalarWhereWithAggregatesInput[]
    NOT?: CardArticleScalarWhereWithAggregatesInput | CardArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardArticle"> | string
    price?: IntWithAggregatesFilter<"CardArticle"> | number
    totalQuantity?: IntWithAggregatesFilter<"CardArticle"> | number
    remainingQuantity?: IntWithAggregatesFilter<"CardArticle"> | number
    exchangeText?: StringWithAggregatesFilter<"CardArticle"> | string
    exchangeRank?: EnumRankListWithAggregatesFilter<"CardArticle"> | $Enums.RankList
    exchangeGenre?: EnumGenreWithAggregatesFilter<"CardArticle"> | $Enums.Genre
    userPhotoCardId?: StringWithAggregatesFilter<"CardArticle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CardArticle"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    price?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    userPhotoCardId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    photoCardId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    photocard?: XOR<PhotoCardScalarRelationFilter, PhotoCardWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    userPhotoCardId?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    createdAt?: SortOrder
    buyer?: UserPhotoCardOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    photocard?: PhotoCardOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    quantity?: IntFilter<"Order"> | number
    price?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    userPhotoCardId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    photoCardId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    photocard?: XOR<PhotoCardScalarRelationFilter, PhotoCardWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    userPhotoCardId?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    price?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: IntWithAggregatesFilter<"Order"> | number
    userPhotoCardId?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    photoCardId?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ExchangeWhereInput = {
    AND?: ExchangeWhereInput | ExchangeWhereInput[]
    OR?: ExchangeWhereInput[]
    NOT?: ExchangeWhereInput | ExchangeWhereInput[]
    id?: StringFilter<"Exchange"> | string
    giverCardId?: StringFilter<"Exchange"> | string
    takerCardId?: StringFilter<"Exchange"> | string
    description?: StringFilter<"Exchange"> | string
    status?: EnumExchangeStatusFilter<"Exchange"> | $Enums.ExchangeStatus
    createdAt?: DateTimeFilter<"Exchange"> | Date | string
    giverCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
    takerCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
  }

  export type ExchangeOrderByWithRelationInput = {
    id?: SortOrder
    giverCardId?: SortOrder
    takerCardId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    giverCard?: UserPhotoCardOrderByWithRelationInput
    takerCard?: UserPhotoCardOrderByWithRelationInput
  }

  export type ExchangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExchangeWhereInput | ExchangeWhereInput[]
    OR?: ExchangeWhereInput[]
    NOT?: ExchangeWhereInput | ExchangeWhereInput[]
    giverCardId?: StringFilter<"Exchange"> | string
    takerCardId?: StringFilter<"Exchange"> | string
    description?: StringFilter<"Exchange"> | string
    status?: EnumExchangeStatusFilter<"Exchange"> | $Enums.ExchangeStatus
    createdAt?: DateTimeFilter<"Exchange"> | Date | string
    giverCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
    takerCard?: XOR<UserPhotoCardScalarRelationFilter, UserPhotoCardWhereInput>
  }, "id">

  export type ExchangeOrderByWithAggregationInput = {
    id?: SortOrder
    giverCardId?: SortOrder
    takerCardId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ExchangeCountOrderByAggregateInput
    _max?: ExchangeMaxOrderByAggregateInput
    _min?: ExchangeMinOrderByAggregateInput
  }

  export type ExchangeScalarWhereWithAggregatesInput = {
    AND?: ExchangeScalarWhereWithAggregatesInput | ExchangeScalarWhereWithAggregatesInput[]
    OR?: ExchangeScalarWhereWithAggregatesInput[]
    NOT?: ExchangeScalarWhereWithAggregatesInput | ExchangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exchange"> | string
    giverCardId?: StringWithAggregatesFilter<"Exchange"> | string
    takerCardId?: StringWithAggregatesFilter<"Exchange"> | string
    description?: StringWithAggregatesFilter<"Exchange"> | string
    status?: EnumExchangeStatusWithAggregatesFilter<"Exchange"> | $Enums.ExchangeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Exchange"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    isRead: boolean
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    isRead: boolean
    message: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    isRead: boolean
    message: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCardCreateInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutPhotoCardInput
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutPhotoCardInput
    order?: OrderCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    creatorId: string
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPhotoCardNestedInput
    userPhotoCard?: UserPhotoCardUpdateManyWithoutPhotoCardNestedInput
    order?: OrderUpdateManyWithoutPhotocardNestedInput
  }

  export type PhotoCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutPhotocardNestedInput
  }

  export type PhotoCardCreateManyInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    creatorId: string
    createdAt?: Date | string
  }

  export type PhotoCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPhotoCardCreateInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardCreateManyInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
  }

  export type UserPhotoCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
  }

  export type UserPhotoCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
  }

  export type CardArticleCreateInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    createdAt?: Date | string
    userPhotoCard: UserPhotoCardCreateNestedOneWithoutCardArticleInput
  }

  export type CardArticleUncheckedCreateInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    userPhotoCardId: string
    createdAt?: Date | string
  }

  export type CardArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUpdateOneRequiredWithoutCardArticleNestedInput
  }

  export type CardArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardArticleCreateManyInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    userPhotoCardId: string
    createdAt?: Date | string
  }

  export type CardArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    createdAt?: Date | string
    buyer: UserPhotoCardCreateNestedOneWithoutOrderInput
    seller: UserCreateNestedOneWithoutOrderInput
    photocard: PhotoCardCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    userId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserPhotoCardUpdateOneRequiredWithoutOrderNestedInput
    seller?: UserUpdateOneRequiredWithoutOrderNestedInput
    photocard?: PhotoCardUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    userId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeCreateInput = {
    id?: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
    giverCard: UserPhotoCardCreateNestedOneWithoutGiverInput
    takerCard: UserPhotoCardCreateNestedOneWithoutTakerInput
  }

  export type ExchangeUncheckedCreateInput = {
    id?: string
    giverCardId: string
    takerCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type ExchangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giverCard?: UserPhotoCardUpdateOneRequiredWithoutGiverNestedInput
    takerCard?: UserPhotoCardUpdateOneRequiredWithoutTakerNestedInput
  }

  export type ExchangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverCardId?: StringFieldUpdateOperationsInput | string
    takerCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeCreateManyInput = {
    id?: string
    giverCardId: string
    takerCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type ExchangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverCardId?: StringFieldUpdateOperationsInput | string
    takerCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type UserPhotoCardListRelationFilter = {
    every?: UserPhotoCardWhereInput
    some?: UserPhotoCardWhereInput
    none?: UserPhotoCardWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PhotoCardListRelationFilter = {
    every?: PhotoCardWhereInput
    some?: PhotoCardWhereInput
    none?: PhotoCardWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPhotoCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    pointAmount?: SortOrder
    createCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    pointAmount?: SortOrder
    createCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    pointAmount?: SortOrder
    createCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    pointAmount?: SortOrder
    createCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    pointAmount?: SortOrder
    createCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isRead?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRankListFilter<$PrismaModel = never> = {
    equals?: $Enums.RankList | EnumRankListFieldRefInput<$PrismaModel>
    in?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    not?: NestedEnumRankListFilter<$PrismaModel> | $Enums.RankList
  }

  export type EnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type PhotoCardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoCardAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PhotoCardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoCardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    price?: SortOrder
    imgUrl?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoCardSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumRankListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RankList | EnumRankListFieldRefInput<$PrismaModel>
    in?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    not?: NestedEnumRankListWithAggregatesFilter<$PrismaModel> | $Enums.RankList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankListFilter<$PrismaModel>
    _max?: NestedEnumRankListFilter<$PrismaModel>
  }

  export type EnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type EnumUserPhotocardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPhotocardStatus | EnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPhotocardStatusFilter<$PrismaModel> | $Enums.UserPhotocardStatus
  }

  export type PhotoCardScalarRelationFilter = {
    is?: PhotoCardWhereInput
    isNot?: PhotoCardWhereInput
  }

  export type CardArticleListRelationFilter = {
    every?: CardArticleWhereInput
    some?: CardArticleWhereInput
    none?: CardArticleWhereInput
  }

  export type ExchangeListRelationFilter = {
    every?: ExchangeWhereInput
    some?: ExchangeWhereInput
    none?: ExchangeWhereInput
  }

  export type CardArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExchangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPhotoCardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    status?: SortOrder
  }

  export type UserPhotoCardAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type UserPhotoCardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    status?: SortOrder
  }

  export type UserPhotoCardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    status?: SortOrder
  }

  export type UserPhotoCardSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumUserPhotocardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPhotocardStatus | EnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPhotocardStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserPhotocardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPhotocardStatusFilter<$PrismaModel>
    _max?: NestedEnumUserPhotocardStatusFilter<$PrismaModel>
  }

  export type UserPhotoCardScalarRelationFilter = {
    is?: UserPhotoCardWhereInput
    isNot?: UserPhotoCardWhereInput
  }

  export type CardArticleCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
    exchangeText?: SortOrder
    exchangeRank?: SortOrder
    exchangeGenre?: SortOrder
    userPhotoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type CardArticleAvgOrderByAggregateInput = {
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
  }

  export type CardArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
    exchangeText?: SortOrder
    exchangeRank?: SortOrder
    exchangeGenre?: SortOrder
    userPhotoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type CardArticleMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
    exchangeText?: SortOrder
    exchangeRank?: SortOrder
    exchangeGenre?: SortOrder
    userPhotoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type CardArticleSumOrderByAggregateInput = {
    price?: SortOrder
    totalQuantity?: SortOrder
    remainingQuantity?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    userPhotoCardId?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    userPhotoCardId?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
    userPhotoCardId?: SortOrder
    userId?: SortOrder
    photoCardId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumExchangeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangeStatus | EnumExchangeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangeStatusFilter<$PrismaModel> | $Enums.ExchangeStatus
  }

  export type ExchangeCountOrderByAggregateInput = {
    id?: SortOrder
    giverCardId?: SortOrder
    takerCardId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeMaxOrderByAggregateInput = {
    id?: SortOrder
    giverCardId?: SortOrder
    takerCardId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeMinOrderByAggregateInput = {
    id?: SortOrder
    giverCardId?: SortOrder
    takerCardId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExchangeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangeStatus | EnumExchangeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExchangeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExchangeStatusFilter<$PrismaModel>
    _max?: NestedEnumExchangeStatusFilter<$PrismaModel>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserPhotoCardCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput> | UserPhotoCardCreateWithoutUserInput[] | UserPhotoCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutUserInput | UserPhotoCardCreateOrConnectWithoutUserInput[]
    createMany?: UserPhotoCardCreateManyUserInputEnvelope
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PhotoCardCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput> | PhotoCardCreateWithoutCreatorInput[] | PhotoCardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PhotoCardCreateOrConnectWithoutCreatorInput | PhotoCardCreateOrConnectWithoutCreatorInput[]
    createMany?: PhotoCardCreateManyCreatorInputEnvelope
    connect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserPhotoCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput> | UserPhotoCardCreateWithoutUserInput[] | UserPhotoCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutUserInput | UserPhotoCardCreateOrConnectWithoutUserInput[]
    createMany?: UserPhotoCardCreateManyUserInputEnvelope
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PhotoCardUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput> | PhotoCardCreateWithoutCreatorInput[] | PhotoCardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PhotoCardCreateOrConnectWithoutCreatorInput | PhotoCardCreateOrConnectWithoutCreatorInput[]
    createMany?: PhotoCardCreateManyCreatorInputEnvelope
    connect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserPhotoCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput> | UserPhotoCardCreateWithoutUserInput[] | UserPhotoCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutUserInput | UserPhotoCardCreateOrConnectWithoutUserInput[]
    upsert?: UserPhotoCardUpsertWithWhereUniqueWithoutUserInput | UserPhotoCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPhotoCardCreateManyUserInputEnvelope
    set?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    disconnect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    delete?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    update?: UserPhotoCardUpdateWithWhereUniqueWithoutUserInput | UserPhotoCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPhotoCardUpdateManyWithWhereWithoutUserInput | UserPhotoCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PhotoCardUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput> | PhotoCardCreateWithoutCreatorInput[] | PhotoCardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PhotoCardCreateOrConnectWithoutCreatorInput | PhotoCardCreateOrConnectWithoutCreatorInput[]
    upsert?: PhotoCardUpsertWithWhereUniqueWithoutCreatorInput | PhotoCardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PhotoCardCreateManyCreatorInputEnvelope
    set?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    disconnect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    delete?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    connect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    update?: PhotoCardUpdateWithWhereUniqueWithoutCreatorInput | PhotoCardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PhotoCardUpdateManyWithWhereWithoutCreatorInput | PhotoCardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PhotoCardScalarWhereInput | PhotoCardScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserPhotoCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput> | UserPhotoCardCreateWithoutUserInput[] | UserPhotoCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutUserInput | UserPhotoCardCreateOrConnectWithoutUserInput[]
    upsert?: UserPhotoCardUpsertWithWhereUniqueWithoutUserInput | UserPhotoCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPhotoCardCreateManyUserInputEnvelope
    set?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    disconnect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    delete?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    update?: UserPhotoCardUpdateWithWhereUniqueWithoutUserInput | UserPhotoCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPhotoCardUpdateManyWithWhereWithoutUserInput | UserPhotoCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PhotoCardUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput> | PhotoCardCreateWithoutCreatorInput[] | PhotoCardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PhotoCardCreateOrConnectWithoutCreatorInput | PhotoCardCreateOrConnectWithoutCreatorInput[]
    upsert?: PhotoCardUpsertWithWhereUniqueWithoutCreatorInput | PhotoCardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PhotoCardCreateManyCreatorInputEnvelope
    set?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    disconnect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    delete?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    connect?: PhotoCardWhereUniqueInput | PhotoCardWhereUniqueInput[]
    update?: PhotoCardUpdateWithWhereUniqueWithoutCreatorInput | PhotoCardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PhotoCardUpdateManyWithWhereWithoutCreatorInput | PhotoCardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PhotoCardScalarWhereInput | PhotoCardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutPhotoCardInput = {
    create?: XOR<UserCreateWithoutPhotoCardInput, UserUncheckedCreateWithoutPhotoCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoCardInput
    connect?: UserWhereUniqueInput
  }

  export type UserPhotoCardCreateNestedManyWithoutPhotoCardInput = {
    create?: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput> | UserPhotoCardCreateWithoutPhotoCardInput[] | UserPhotoCardUncheckedCreateWithoutPhotoCardInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutPhotoCardInput | UserPhotoCardCreateOrConnectWithoutPhotoCardInput[]
    createMany?: UserPhotoCardCreateManyPhotoCardInputEnvelope
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutPhotocardInput = {
    create?: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput> | OrderCreateWithoutPhotocardInput[] | OrderUncheckedCreateWithoutPhotocardInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPhotocardInput | OrderCreateOrConnectWithoutPhotocardInput[]
    createMany?: OrderCreateManyPhotocardInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserPhotoCardUncheckedCreateNestedManyWithoutPhotoCardInput = {
    create?: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput> | UserPhotoCardCreateWithoutPhotoCardInput[] | UserPhotoCardUncheckedCreateWithoutPhotoCardInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutPhotoCardInput | UserPhotoCardCreateOrConnectWithoutPhotoCardInput[]
    createMany?: UserPhotoCardCreateManyPhotoCardInputEnvelope
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPhotocardInput = {
    create?: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput> | OrderCreateWithoutPhotocardInput[] | OrderUncheckedCreateWithoutPhotocardInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPhotocardInput | OrderCreateOrConnectWithoutPhotocardInput[]
    createMany?: OrderCreateManyPhotocardInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumRankListFieldUpdateOperationsInput = {
    set?: $Enums.RankList
  }

  export type EnumGenreFieldUpdateOperationsInput = {
    set?: $Enums.Genre
  }

  export type UserUpdateOneRequiredWithoutPhotoCardNestedInput = {
    create?: XOR<UserCreateWithoutPhotoCardInput, UserUncheckedCreateWithoutPhotoCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoCardInput
    upsert?: UserUpsertWithoutPhotoCardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotoCardInput, UserUpdateWithoutPhotoCardInput>, UserUncheckedUpdateWithoutPhotoCardInput>
  }

  export type UserPhotoCardUpdateManyWithoutPhotoCardNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput> | UserPhotoCardCreateWithoutPhotoCardInput[] | UserPhotoCardUncheckedCreateWithoutPhotoCardInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutPhotoCardInput | UserPhotoCardCreateOrConnectWithoutPhotoCardInput[]
    upsert?: UserPhotoCardUpsertWithWhereUniqueWithoutPhotoCardInput | UserPhotoCardUpsertWithWhereUniqueWithoutPhotoCardInput[]
    createMany?: UserPhotoCardCreateManyPhotoCardInputEnvelope
    set?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    disconnect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    delete?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    update?: UserPhotoCardUpdateWithWhereUniqueWithoutPhotoCardInput | UserPhotoCardUpdateWithWhereUniqueWithoutPhotoCardInput[]
    updateMany?: UserPhotoCardUpdateManyWithWhereWithoutPhotoCardInput | UserPhotoCardUpdateManyWithWhereWithoutPhotoCardInput[]
    deleteMany?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutPhotocardNestedInput = {
    create?: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput> | OrderCreateWithoutPhotocardInput[] | OrderUncheckedCreateWithoutPhotocardInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPhotocardInput | OrderCreateOrConnectWithoutPhotocardInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPhotocardInput | OrderUpsertWithWhereUniqueWithoutPhotocardInput[]
    createMany?: OrderCreateManyPhotocardInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPhotocardInput | OrderUpdateWithWhereUniqueWithoutPhotocardInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPhotocardInput | OrderUpdateManyWithWhereWithoutPhotocardInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserPhotoCardUncheckedUpdateManyWithoutPhotoCardNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput> | UserPhotoCardCreateWithoutPhotoCardInput[] | UserPhotoCardUncheckedCreateWithoutPhotoCardInput[]
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutPhotoCardInput | UserPhotoCardCreateOrConnectWithoutPhotoCardInput[]
    upsert?: UserPhotoCardUpsertWithWhereUniqueWithoutPhotoCardInput | UserPhotoCardUpsertWithWhereUniqueWithoutPhotoCardInput[]
    createMany?: UserPhotoCardCreateManyPhotoCardInputEnvelope
    set?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    disconnect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    delete?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    connect?: UserPhotoCardWhereUniqueInput | UserPhotoCardWhereUniqueInput[]
    update?: UserPhotoCardUpdateWithWhereUniqueWithoutPhotoCardInput | UserPhotoCardUpdateWithWhereUniqueWithoutPhotoCardInput[]
    updateMany?: UserPhotoCardUpdateManyWithWhereWithoutPhotoCardInput | UserPhotoCardUpdateManyWithWhereWithoutPhotoCardInput[]
    deleteMany?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPhotocardNestedInput = {
    create?: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput> | OrderCreateWithoutPhotocardInput[] | OrderUncheckedCreateWithoutPhotocardInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPhotocardInput | OrderCreateOrConnectWithoutPhotocardInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPhotocardInput | OrderUpsertWithWhereUniqueWithoutPhotocardInput[]
    createMany?: OrderCreateManyPhotocardInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPhotocardInput | OrderUpdateWithWhereUniqueWithoutPhotocardInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPhotocardInput | OrderUpdateManyWithWhereWithoutPhotocardInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPhotoCardInput = {
    create?: XOR<UserCreateWithoutUserPhotoCardInput, UserUncheckedCreateWithoutUserPhotoCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPhotoCardInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCardCreateNestedOneWithoutUserPhotoCardInput = {
    create?: XOR<PhotoCardCreateWithoutUserPhotoCardInput, PhotoCardUncheckedCreateWithoutUserPhotoCardInput>
    connectOrCreate?: PhotoCardCreateOrConnectWithoutUserPhotoCardInput
    connect?: PhotoCardWhereUniqueInput
  }

  export type CardArticleCreateNestedManyWithoutUserPhotoCardInput = {
    create?: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput> | CardArticleCreateWithoutUserPhotoCardInput[] | CardArticleUncheckedCreateWithoutUserPhotoCardInput[]
    connectOrCreate?: CardArticleCreateOrConnectWithoutUserPhotoCardInput | CardArticleCreateOrConnectWithoutUserPhotoCardInput[]
    createMany?: CardArticleCreateManyUserPhotoCardInputEnvelope
    connect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ExchangeCreateNestedManyWithoutGiverCardInput = {
    create?: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput> | ExchangeCreateWithoutGiverCardInput[] | ExchangeUncheckedCreateWithoutGiverCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutGiverCardInput | ExchangeCreateOrConnectWithoutGiverCardInput[]
    createMany?: ExchangeCreateManyGiverCardInputEnvelope
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
  }

  export type ExchangeCreateNestedManyWithoutTakerCardInput = {
    create?: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput> | ExchangeCreateWithoutTakerCardInput[] | ExchangeUncheckedCreateWithoutTakerCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutTakerCardInput | ExchangeCreateOrConnectWithoutTakerCardInput[]
    createMany?: ExchangeCreateManyTakerCardInputEnvelope
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
  }

  export type CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput = {
    create?: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput> | CardArticleCreateWithoutUserPhotoCardInput[] | CardArticleUncheckedCreateWithoutUserPhotoCardInput[]
    connectOrCreate?: CardArticleCreateOrConnectWithoutUserPhotoCardInput | CardArticleCreateOrConnectWithoutUserPhotoCardInput[]
    createMany?: CardArticleCreateManyUserPhotoCardInputEnvelope
    connect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ExchangeUncheckedCreateNestedManyWithoutGiverCardInput = {
    create?: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput> | ExchangeCreateWithoutGiverCardInput[] | ExchangeUncheckedCreateWithoutGiverCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutGiverCardInput | ExchangeCreateOrConnectWithoutGiverCardInput[]
    createMany?: ExchangeCreateManyGiverCardInputEnvelope
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
  }

  export type ExchangeUncheckedCreateNestedManyWithoutTakerCardInput = {
    create?: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput> | ExchangeCreateWithoutTakerCardInput[] | ExchangeUncheckedCreateWithoutTakerCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutTakerCardInput | ExchangeCreateOrConnectWithoutTakerCardInput[]
    createMany?: ExchangeCreateManyTakerCardInputEnvelope
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
  }

  export type EnumUserPhotocardStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserPhotocardStatus
  }

  export type UserUpdateOneRequiredWithoutUserPhotoCardNestedInput = {
    create?: XOR<UserCreateWithoutUserPhotoCardInput, UserUncheckedCreateWithoutUserPhotoCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPhotoCardInput
    upsert?: UserUpsertWithoutUserPhotoCardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPhotoCardInput, UserUpdateWithoutUserPhotoCardInput>, UserUncheckedUpdateWithoutUserPhotoCardInput>
  }

  export type PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput = {
    create?: XOR<PhotoCardCreateWithoutUserPhotoCardInput, PhotoCardUncheckedCreateWithoutUserPhotoCardInput>
    connectOrCreate?: PhotoCardCreateOrConnectWithoutUserPhotoCardInput
    upsert?: PhotoCardUpsertWithoutUserPhotoCardInput
    connect?: PhotoCardWhereUniqueInput
    update?: XOR<XOR<PhotoCardUpdateToOneWithWhereWithoutUserPhotoCardInput, PhotoCardUpdateWithoutUserPhotoCardInput>, PhotoCardUncheckedUpdateWithoutUserPhotoCardInput>
  }

  export type CardArticleUpdateManyWithoutUserPhotoCardNestedInput = {
    create?: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput> | CardArticleCreateWithoutUserPhotoCardInput[] | CardArticleUncheckedCreateWithoutUserPhotoCardInput[]
    connectOrCreate?: CardArticleCreateOrConnectWithoutUserPhotoCardInput | CardArticleCreateOrConnectWithoutUserPhotoCardInput[]
    upsert?: CardArticleUpsertWithWhereUniqueWithoutUserPhotoCardInput | CardArticleUpsertWithWhereUniqueWithoutUserPhotoCardInput[]
    createMany?: CardArticleCreateManyUserPhotoCardInputEnvelope
    set?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    disconnect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    delete?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    connect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    update?: CardArticleUpdateWithWhereUniqueWithoutUserPhotoCardInput | CardArticleUpdateWithWhereUniqueWithoutUserPhotoCardInput[]
    updateMany?: CardArticleUpdateManyWithWhereWithoutUserPhotoCardInput | CardArticleUpdateManyWithWhereWithoutUserPhotoCardInput[]
    deleteMany?: CardArticleScalarWhereInput | CardArticleScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ExchangeUpdateManyWithoutGiverCardNestedInput = {
    create?: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput> | ExchangeCreateWithoutGiverCardInput[] | ExchangeUncheckedCreateWithoutGiverCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutGiverCardInput | ExchangeCreateOrConnectWithoutGiverCardInput[]
    upsert?: ExchangeUpsertWithWhereUniqueWithoutGiverCardInput | ExchangeUpsertWithWhereUniqueWithoutGiverCardInput[]
    createMany?: ExchangeCreateManyGiverCardInputEnvelope
    set?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    disconnect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    delete?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    update?: ExchangeUpdateWithWhereUniqueWithoutGiverCardInput | ExchangeUpdateWithWhereUniqueWithoutGiverCardInput[]
    updateMany?: ExchangeUpdateManyWithWhereWithoutGiverCardInput | ExchangeUpdateManyWithWhereWithoutGiverCardInput[]
    deleteMany?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
  }

  export type ExchangeUpdateManyWithoutTakerCardNestedInput = {
    create?: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput> | ExchangeCreateWithoutTakerCardInput[] | ExchangeUncheckedCreateWithoutTakerCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutTakerCardInput | ExchangeCreateOrConnectWithoutTakerCardInput[]
    upsert?: ExchangeUpsertWithWhereUniqueWithoutTakerCardInput | ExchangeUpsertWithWhereUniqueWithoutTakerCardInput[]
    createMany?: ExchangeCreateManyTakerCardInputEnvelope
    set?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    disconnect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    delete?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    update?: ExchangeUpdateWithWhereUniqueWithoutTakerCardInput | ExchangeUpdateWithWhereUniqueWithoutTakerCardInput[]
    updateMany?: ExchangeUpdateManyWithWhereWithoutTakerCardInput | ExchangeUpdateManyWithWhereWithoutTakerCardInput[]
    deleteMany?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
  }

  export type CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput = {
    create?: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput> | CardArticleCreateWithoutUserPhotoCardInput[] | CardArticleUncheckedCreateWithoutUserPhotoCardInput[]
    connectOrCreate?: CardArticleCreateOrConnectWithoutUserPhotoCardInput | CardArticleCreateOrConnectWithoutUserPhotoCardInput[]
    upsert?: CardArticleUpsertWithWhereUniqueWithoutUserPhotoCardInput | CardArticleUpsertWithWhereUniqueWithoutUserPhotoCardInput[]
    createMany?: CardArticleCreateManyUserPhotoCardInputEnvelope
    set?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    disconnect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    delete?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    connect?: CardArticleWhereUniqueInput | CardArticleWhereUniqueInput[]
    update?: CardArticleUpdateWithWhereUniqueWithoutUserPhotoCardInput | CardArticleUpdateWithWhereUniqueWithoutUserPhotoCardInput[]
    updateMany?: CardArticleUpdateManyWithWhereWithoutUserPhotoCardInput | CardArticleUpdateManyWithWhereWithoutUserPhotoCardInput[]
    deleteMany?: CardArticleScalarWhereInput | CardArticleScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput = {
    create?: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput> | ExchangeCreateWithoutGiverCardInput[] | ExchangeUncheckedCreateWithoutGiverCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutGiverCardInput | ExchangeCreateOrConnectWithoutGiverCardInput[]
    upsert?: ExchangeUpsertWithWhereUniqueWithoutGiverCardInput | ExchangeUpsertWithWhereUniqueWithoutGiverCardInput[]
    createMany?: ExchangeCreateManyGiverCardInputEnvelope
    set?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    disconnect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    delete?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    update?: ExchangeUpdateWithWhereUniqueWithoutGiverCardInput | ExchangeUpdateWithWhereUniqueWithoutGiverCardInput[]
    updateMany?: ExchangeUpdateManyWithWhereWithoutGiverCardInput | ExchangeUpdateManyWithWhereWithoutGiverCardInput[]
    deleteMany?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
  }

  export type ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput = {
    create?: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput> | ExchangeCreateWithoutTakerCardInput[] | ExchangeUncheckedCreateWithoutTakerCardInput[]
    connectOrCreate?: ExchangeCreateOrConnectWithoutTakerCardInput | ExchangeCreateOrConnectWithoutTakerCardInput[]
    upsert?: ExchangeUpsertWithWhereUniqueWithoutTakerCardInput | ExchangeUpsertWithWhereUniqueWithoutTakerCardInput[]
    createMany?: ExchangeCreateManyTakerCardInputEnvelope
    set?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    disconnect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    delete?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    connect?: ExchangeWhereUniqueInput | ExchangeWhereUniqueInput[]
    update?: ExchangeUpdateWithWhereUniqueWithoutTakerCardInput | ExchangeUpdateWithWhereUniqueWithoutTakerCardInput[]
    updateMany?: ExchangeUpdateManyWithWhereWithoutTakerCardInput | ExchangeUpdateManyWithWhereWithoutTakerCardInput[]
    deleteMany?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
  }

  export type UserPhotoCardCreateNestedOneWithoutCardArticleInput = {
    create?: XOR<UserPhotoCardCreateWithoutCardArticleInput, UserPhotoCardUncheckedCreateWithoutCardArticleInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutCardArticleInput
    connect?: UserPhotoCardWhereUniqueInput
  }

  export type UserPhotoCardUpdateOneRequiredWithoutCardArticleNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutCardArticleInput, UserPhotoCardUncheckedCreateWithoutCardArticleInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutCardArticleInput
    upsert?: UserPhotoCardUpsertWithoutCardArticleInput
    connect?: UserPhotoCardWhereUniqueInput
    update?: XOR<XOR<UserPhotoCardUpdateToOneWithWhereWithoutCardArticleInput, UserPhotoCardUpdateWithoutCardArticleInput>, UserPhotoCardUncheckedUpdateWithoutCardArticleInput>
  }

  export type UserPhotoCardCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserPhotoCardCreateWithoutOrderInput, UserPhotoCardUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutOrderInput
    connect?: UserPhotoCardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCardCreateNestedOneWithoutOrderInput = {
    create?: XOR<PhotoCardCreateWithoutOrderInput, PhotoCardUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PhotoCardCreateOrConnectWithoutOrderInput
    connect?: PhotoCardWhereUniqueInput
  }

  export type UserPhotoCardUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutOrderInput, UserPhotoCardUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutOrderInput
    upsert?: UserPhotoCardUpsertWithoutOrderInput
    connect?: UserPhotoCardWhereUniqueInput
    update?: XOR<XOR<UserPhotoCardUpdateToOneWithWhereWithoutOrderInput, UserPhotoCardUpdateWithoutOrderInput>, UserPhotoCardUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type PhotoCardUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<PhotoCardCreateWithoutOrderInput, PhotoCardUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PhotoCardCreateOrConnectWithoutOrderInput
    upsert?: PhotoCardUpsertWithoutOrderInput
    connect?: PhotoCardWhereUniqueInput
    update?: XOR<XOR<PhotoCardUpdateToOneWithWhereWithoutOrderInput, PhotoCardUpdateWithoutOrderInput>, PhotoCardUncheckedUpdateWithoutOrderInput>
  }

  export type UserPhotoCardCreateNestedOneWithoutGiverInput = {
    create?: XOR<UserPhotoCardCreateWithoutGiverInput, UserPhotoCardUncheckedCreateWithoutGiverInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutGiverInput
    connect?: UserPhotoCardWhereUniqueInput
  }

  export type UserPhotoCardCreateNestedOneWithoutTakerInput = {
    create?: XOR<UserPhotoCardCreateWithoutTakerInput, UserPhotoCardUncheckedCreateWithoutTakerInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutTakerInput
    connect?: UserPhotoCardWhereUniqueInput
  }

  export type EnumExchangeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExchangeStatus
  }

  export type UserPhotoCardUpdateOneRequiredWithoutGiverNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutGiverInput, UserPhotoCardUncheckedCreateWithoutGiverInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutGiverInput
    upsert?: UserPhotoCardUpsertWithoutGiverInput
    connect?: UserPhotoCardWhereUniqueInput
    update?: XOR<XOR<UserPhotoCardUpdateToOneWithWhereWithoutGiverInput, UserPhotoCardUpdateWithoutGiverInput>, UserPhotoCardUncheckedUpdateWithoutGiverInput>
  }

  export type UserPhotoCardUpdateOneRequiredWithoutTakerNestedInput = {
    create?: XOR<UserPhotoCardCreateWithoutTakerInput, UserPhotoCardUncheckedCreateWithoutTakerInput>
    connectOrCreate?: UserPhotoCardCreateOrConnectWithoutTakerInput
    upsert?: UserPhotoCardUpsertWithoutTakerInput
    connect?: UserPhotoCardWhereUniqueInput
    update?: XOR<XOR<UserPhotoCardUpdateToOneWithWhereWithoutTakerInput, UserPhotoCardUpdateWithoutTakerInput>, UserPhotoCardUncheckedUpdateWithoutTakerInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRankListFilter<$PrismaModel = never> = {
    equals?: $Enums.RankList | EnumRankListFieldRefInput<$PrismaModel>
    in?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    not?: NestedEnumRankListFilter<$PrismaModel> | $Enums.RankList
  }

  export type NestedEnumGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumGenreFilter<$PrismaModel> | $Enums.Genre
  }

  export type NestedEnumRankListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RankList | EnumRankListFieldRefInput<$PrismaModel>
    in?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    notIn?: $Enums.RankList[] | ListEnumRankListFieldRefInput<$PrismaModel>
    not?: NestedEnumRankListWithAggregatesFilter<$PrismaModel> | $Enums.RankList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRankListFilter<$PrismaModel>
    _max?: NestedEnumRankListFilter<$PrismaModel>
  }

  export type NestedEnumGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel>
    in?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumGenreWithAggregatesFilter<$PrismaModel> | $Enums.Genre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenreFilter<$PrismaModel>
    _max?: NestedEnumGenreFilter<$PrismaModel>
  }

  export type NestedEnumUserPhotocardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPhotocardStatus | EnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPhotocardStatusFilter<$PrismaModel> | $Enums.UserPhotocardStatus
  }

  export type NestedEnumUserPhotocardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPhotocardStatus | EnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserPhotocardStatus[] | ListEnumUserPhotocardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserPhotocardStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserPhotocardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserPhotocardStatusFilter<$PrismaModel>
    _max?: NestedEnumUserPhotocardStatusFilter<$PrismaModel>
  }

  export type NestedEnumExchangeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangeStatus | EnumExchangeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangeStatusFilter<$PrismaModel> | $Enums.ExchangeStatus
  }

  export type NestedEnumExchangeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangeStatus | EnumExchangeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangeStatus[] | ListEnumExchangeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExchangeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExchangeStatusFilter<$PrismaModel>
    _max?: NestedEnumExchangeStatusFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    isRead: boolean
    message: string
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    isRead: boolean
    message: string
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPhotoCardCreateWithoutUserInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutUserInput = {
    id?: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutUserInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput>
  }

  export type UserPhotoCardCreateManyUserInputEnvelope = {
    data: UserPhotoCardCreateManyUserInput | UserPhotoCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSellerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    createdAt?: Date | string
    buyer: UserPhotoCardCreateNestedOneWithoutOrderInput
    photocard: PhotoCardCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSellerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutSellerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderCreateManySellerInputEnvelope = {
    data: OrderCreateManySellerInput | OrderCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCardCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutPhotoCardInput
    order?: OrderCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardCreateOrConnectWithoutCreatorInput = {
    where: PhotoCardWhereUniqueInput
    create: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput>
  }

  export type PhotoCardCreateManyCreatorInputEnvelope = {
    data: PhotoCardCreateManyCreatorInput | PhotoCardCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserPhotoCardUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPhotoCardWhereUniqueInput
    update: XOR<UserPhotoCardUpdateWithoutUserInput, UserPhotoCardUncheckedUpdateWithoutUserInput>
    create: XOR<UserPhotoCardCreateWithoutUserInput, UserPhotoCardUncheckedCreateWithoutUserInput>
  }

  export type UserPhotoCardUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPhotoCardWhereUniqueInput
    data: XOR<UserPhotoCardUpdateWithoutUserInput, UserPhotoCardUncheckedUpdateWithoutUserInput>
  }

  export type UserPhotoCardUpdateManyWithWhereWithoutUserInput = {
    where: UserPhotoCardScalarWhereInput
    data: XOR<UserPhotoCardUpdateManyMutationInput, UserPhotoCardUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPhotoCardScalarWhereInput = {
    AND?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
    OR?: UserPhotoCardScalarWhereInput[]
    NOT?: UserPhotoCardScalarWhereInput | UserPhotoCardScalarWhereInput[]
    id?: StringFilter<"UserPhotoCard"> | string
    userId?: StringFilter<"UserPhotoCard"> | string
    photoCardId?: StringFilter<"UserPhotoCard"> | string
    quantity?: IntFilter<"UserPhotoCard"> | number
    price?: IntFilter<"UserPhotoCard"> | number
    status?: EnumUserPhotocardStatusFilter<"UserPhotoCard"> | $Enums.UserPhotocardStatus
  }

  export type OrderUpsertWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
  }

  export type OrderUpdateManyWithWhereWithoutSellerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSellerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    price?: IntFilter<"Order"> | number
    totalPrice?: IntFilter<"Order"> | number
    userPhotoCardId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    photoCardId?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PhotoCardUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PhotoCardWhereUniqueInput
    update: XOR<PhotoCardUpdateWithoutCreatorInput, PhotoCardUncheckedUpdateWithoutCreatorInput>
    create: XOR<PhotoCardCreateWithoutCreatorInput, PhotoCardUncheckedCreateWithoutCreatorInput>
  }

  export type PhotoCardUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PhotoCardWhereUniqueInput
    data: XOR<PhotoCardUpdateWithoutCreatorInput, PhotoCardUncheckedUpdateWithoutCreatorInput>
  }

  export type PhotoCardUpdateManyWithWhereWithoutCreatorInput = {
    where: PhotoCardScalarWhereInput
    data: XOR<PhotoCardUpdateManyMutationInput, PhotoCardUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PhotoCardScalarWhereInput = {
    AND?: PhotoCardScalarWhereInput | PhotoCardScalarWhereInput[]
    OR?: PhotoCardScalarWhereInput[]
    NOT?: PhotoCardScalarWhereInput | PhotoCardScalarWhereInput[]
    id?: StringFilter<"PhotoCard"> | string
    title?: StringFilter<"PhotoCard"> | string
    description?: StringFilter<"PhotoCard"> | string
    rank?: EnumRankListFilter<"PhotoCard"> | $Enums.RankList
    genre?: EnumGenreFilter<"PhotoCard"> | $Enums.Genre
    price?: IntFilter<"PhotoCard"> | number
    imgUrl?: StringFilter<"PhotoCard"> | string
    creatorId?: StringFilter<"PhotoCard"> | string
    createdAt?: DateTimeFilter<"PhotoCard"> | Date | string
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutPhotoCardInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutPhotoCardInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutPhotoCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotoCardInput, UserUncheckedCreateWithoutPhotoCardInput>
  }

  export type UserPhotoCardCreateWithoutPhotoCardInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutPhotoCardInput = {
    id?: string
    userId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutPhotoCardInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput>
  }

  export type UserPhotoCardCreateManyPhotoCardInputEnvelope = {
    data: UserPhotoCardCreateManyPhotoCardInput | UserPhotoCardCreateManyPhotoCardInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutPhotocardInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    createdAt?: Date | string
    buyer: UserPhotoCardCreateNestedOneWithoutOrderInput
    seller: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPhotocardInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    userId: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutPhotocardInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput>
  }

  export type OrderCreateManyPhotocardInputEnvelope = {
    data: OrderCreateManyPhotocardInput | OrderCreateManyPhotocardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPhotoCardInput = {
    update: XOR<UserUpdateWithoutPhotoCardInput, UserUncheckedUpdateWithoutPhotoCardInput>
    create: XOR<UserCreateWithoutPhotoCardInput, UserUncheckedCreateWithoutPhotoCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotoCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotoCardInput, UserUncheckedUpdateWithoutPhotoCardInput>
  }

  export type UserUpdateWithoutPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserPhotoCardUpsertWithWhereUniqueWithoutPhotoCardInput = {
    where: UserPhotoCardWhereUniqueInput
    update: XOR<UserPhotoCardUpdateWithoutPhotoCardInput, UserPhotoCardUncheckedUpdateWithoutPhotoCardInput>
    create: XOR<UserPhotoCardCreateWithoutPhotoCardInput, UserPhotoCardUncheckedCreateWithoutPhotoCardInput>
  }

  export type UserPhotoCardUpdateWithWhereUniqueWithoutPhotoCardInput = {
    where: UserPhotoCardWhereUniqueInput
    data: XOR<UserPhotoCardUpdateWithoutPhotoCardInput, UserPhotoCardUncheckedUpdateWithoutPhotoCardInput>
  }

  export type UserPhotoCardUpdateManyWithWhereWithoutPhotoCardInput = {
    where: UserPhotoCardScalarWhereInput
    data: XOR<UserPhotoCardUpdateManyMutationInput, UserPhotoCardUncheckedUpdateManyWithoutPhotoCardInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutPhotocardInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPhotocardInput, OrderUncheckedUpdateWithoutPhotocardInput>
    create: XOR<OrderCreateWithoutPhotocardInput, OrderUncheckedCreateWithoutPhotocardInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPhotocardInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPhotocardInput, OrderUncheckedUpdateWithoutPhotocardInput>
  }

  export type OrderUpdateManyWithWhereWithoutPhotocardInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPhotocardInput>
  }

  export type UserCreateWithoutUserPhotoCardInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutUserInput
    order?: OrderCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUserPhotoCardInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    order?: OrderUncheckedCreateNestedManyWithoutSellerInput
    photoCard?: PhotoCardUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUserPhotoCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPhotoCardInput, UserUncheckedCreateWithoutUserPhotoCardInput>
  }

  export type PhotoCardCreateWithoutUserPhotoCardInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutPhotoCardInput
    order?: OrderCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardUncheckedCreateWithoutUserPhotoCardInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    creatorId: string
    createdAt?: Date | string
    order?: OrderUncheckedCreateNestedManyWithoutPhotocardInput
  }

  export type PhotoCardCreateOrConnectWithoutUserPhotoCardInput = {
    where: PhotoCardWhereUniqueInput
    create: XOR<PhotoCardCreateWithoutUserPhotoCardInput, PhotoCardUncheckedCreateWithoutUserPhotoCardInput>
  }

  export type CardArticleCreateWithoutUserPhotoCardInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    createdAt?: Date | string
  }

  export type CardArticleUncheckedCreateWithoutUserPhotoCardInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    createdAt?: Date | string
  }

  export type CardArticleCreateOrConnectWithoutUserPhotoCardInput = {
    where: CardArticleWhereUniqueInput
    create: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput>
  }

  export type CardArticleCreateManyUserPhotoCardInputEnvelope = {
    data: CardArticleCreateManyUserPhotoCardInput | CardArticleCreateManyUserPhotoCardInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutBuyerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutOrderInput
    photocard: PhotoCardCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeCreateWithoutGiverCardInput = {
    id?: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
    takerCard: UserPhotoCardCreateNestedOneWithoutTakerInput
  }

  export type ExchangeUncheckedCreateWithoutGiverCardInput = {
    id?: string
    takerCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type ExchangeCreateOrConnectWithoutGiverCardInput = {
    where: ExchangeWhereUniqueInput
    create: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput>
  }

  export type ExchangeCreateManyGiverCardInputEnvelope = {
    data: ExchangeCreateManyGiverCardInput | ExchangeCreateManyGiverCardInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeCreateWithoutTakerCardInput = {
    id?: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
    giverCard: UserPhotoCardCreateNestedOneWithoutGiverInput
  }

  export type ExchangeUncheckedCreateWithoutTakerCardInput = {
    id?: string
    giverCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type ExchangeCreateOrConnectWithoutTakerCardInput = {
    where: ExchangeWhereUniqueInput
    create: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput>
  }

  export type ExchangeCreateManyTakerCardInputEnvelope = {
    data: ExchangeCreateManyTakerCardInput | ExchangeCreateManyTakerCardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserPhotoCardInput = {
    update: XOR<UserUpdateWithoutUserPhotoCardInput, UserUncheckedUpdateWithoutUserPhotoCardInput>
    create: XOR<UserCreateWithoutUserPhotoCardInput, UserUncheckedCreateWithoutUserPhotoCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPhotoCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPhotoCardInput, UserUncheckedUpdateWithoutUserPhotoCardInput>
  }

  export type UserUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutUserNestedInput
    order?: OrderUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    order?: OrderUncheckedUpdateManyWithoutSellerNestedInput
    photoCard?: PhotoCardUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PhotoCardUpsertWithoutUserPhotoCardInput = {
    update: XOR<PhotoCardUpdateWithoutUserPhotoCardInput, PhotoCardUncheckedUpdateWithoutUserPhotoCardInput>
    create: XOR<PhotoCardCreateWithoutUserPhotoCardInput, PhotoCardUncheckedCreateWithoutUserPhotoCardInput>
    where?: PhotoCardWhereInput
  }

  export type PhotoCardUpdateToOneWithWhereWithoutUserPhotoCardInput = {
    where?: PhotoCardWhereInput
    data: XOR<PhotoCardUpdateWithoutUserPhotoCardInput, PhotoCardUncheckedUpdateWithoutUserPhotoCardInput>
  }

  export type PhotoCardUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPhotoCardNestedInput
    order?: OrderUpdateManyWithoutPhotocardNestedInput
  }

  export type PhotoCardUncheckedUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUncheckedUpdateManyWithoutPhotocardNestedInput
  }

  export type CardArticleUpsertWithWhereUniqueWithoutUserPhotoCardInput = {
    where: CardArticleWhereUniqueInput
    update: XOR<CardArticleUpdateWithoutUserPhotoCardInput, CardArticleUncheckedUpdateWithoutUserPhotoCardInput>
    create: XOR<CardArticleCreateWithoutUserPhotoCardInput, CardArticleUncheckedCreateWithoutUserPhotoCardInput>
  }

  export type CardArticleUpdateWithWhereUniqueWithoutUserPhotoCardInput = {
    where: CardArticleWhereUniqueInput
    data: XOR<CardArticleUpdateWithoutUserPhotoCardInput, CardArticleUncheckedUpdateWithoutUserPhotoCardInput>
  }

  export type CardArticleUpdateManyWithWhereWithoutUserPhotoCardInput = {
    where: CardArticleScalarWhereInput
    data: XOR<CardArticleUpdateManyMutationInput, CardArticleUncheckedUpdateManyWithoutUserPhotoCardInput>
  }

  export type CardArticleScalarWhereInput = {
    AND?: CardArticleScalarWhereInput | CardArticleScalarWhereInput[]
    OR?: CardArticleScalarWhereInput[]
    NOT?: CardArticleScalarWhereInput | CardArticleScalarWhereInput[]
    id?: StringFilter<"CardArticle"> | string
    price?: IntFilter<"CardArticle"> | number
    totalQuantity?: IntFilter<"CardArticle"> | number
    remainingQuantity?: IntFilter<"CardArticle"> | number
    exchangeText?: StringFilter<"CardArticle"> | string
    exchangeRank?: EnumRankListFilter<"CardArticle"> | $Enums.RankList
    exchangeGenre?: EnumGenreFilter<"CardArticle"> | $Enums.Genre
    userPhotoCardId?: StringFilter<"CardArticle"> | string
    createdAt?: DateTimeFilter<"CardArticle"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ExchangeUpsertWithWhereUniqueWithoutGiverCardInput = {
    where: ExchangeWhereUniqueInput
    update: XOR<ExchangeUpdateWithoutGiverCardInput, ExchangeUncheckedUpdateWithoutGiverCardInput>
    create: XOR<ExchangeCreateWithoutGiverCardInput, ExchangeUncheckedCreateWithoutGiverCardInput>
  }

  export type ExchangeUpdateWithWhereUniqueWithoutGiverCardInput = {
    where: ExchangeWhereUniqueInput
    data: XOR<ExchangeUpdateWithoutGiverCardInput, ExchangeUncheckedUpdateWithoutGiverCardInput>
  }

  export type ExchangeUpdateManyWithWhereWithoutGiverCardInput = {
    where: ExchangeScalarWhereInput
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyWithoutGiverCardInput>
  }

  export type ExchangeScalarWhereInput = {
    AND?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
    OR?: ExchangeScalarWhereInput[]
    NOT?: ExchangeScalarWhereInput | ExchangeScalarWhereInput[]
    id?: StringFilter<"Exchange"> | string
    giverCardId?: StringFilter<"Exchange"> | string
    takerCardId?: StringFilter<"Exchange"> | string
    description?: StringFilter<"Exchange"> | string
    status?: EnumExchangeStatusFilter<"Exchange"> | $Enums.ExchangeStatus
    createdAt?: DateTimeFilter<"Exchange"> | Date | string
  }

  export type ExchangeUpsertWithWhereUniqueWithoutTakerCardInput = {
    where: ExchangeWhereUniqueInput
    update: XOR<ExchangeUpdateWithoutTakerCardInput, ExchangeUncheckedUpdateWithoutTakerCardInput>
    create: XOR<ExchangeCreateWithoutTakerCardInput, ExchangeUncheckedCreateWithoutTakerCardInput>
  }

  export type ExchangeUpdateWithWhereUniqueWithoutTakerCardInput = {
    where: ExchangeWhereUniqueInput
    data: XOR<ExchangeUpdateWithoutTakerCardInput, ExchangeUncheckedUpdateWithoutTakerCardInput>
  }

  export type ExchangeUpdateManyWithWhereWithoutTakerCardInput = {
    where: ExchangeScalarWhereInput
    data: XOR<ExchangeUpdateManyMutationInput, ExchangeUncheckedUpdateManyWithoutTakerCardInput>
  }

  export type UserPhotoCardCreateWithoutCardArticleInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutCardArticleInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutCardArticleInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutCardArticleInput, UserPhotoCardUncheckedCreateWithoutCardArticleInput>
  }

  export type UserPhotoCardUpsertWithoutCardArticleInput = {
    update: XOR<UserPhotoCardUpdateWithoutCardArticleInput, UserPhotoCardUncheckedUpdateWithoutCardArticleInput>
    create: XOR<UserPhotoCardCreateWithoutCardArticleInput, UserPhotoCardUncheckedCreateWithoutCardArticleInput>
    where?: UserPhotoCardWhereInput
  }

  export type UserPhotoCardUpdateToOneWithWhereWithoutCardArticleInput = {
    where?: UserPhotoCardWhereInput
    data: XOR<UserPhotoCardUpdateWithoutCardArticleInput, UserPhotoCardUncheckedUpdateWithoutCardArticleInput>
  }

  export type UserPhotoCardUpdateWithoutCardArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutCardArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutOrderInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutOrderInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutOrderInput, UserPhotoCardUncheckedCreateWithoutOrderInput>
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutUserInput
    photoCard?: PhotoCardCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    email: string
    password: string
    nickname: string
    pointAmount: number
    createCount?: number
    createdAt?: Date | string
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutUserInput
    photoCard?: PhotoCardUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type PhotoCardCreateWithoutOrderInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutPhotoCardInput
    userPhotoCard?: UserPhotoCardCreateNestedManyWithoutPhotoCardInput
  }

  export type PhotoCardUncheckedCreateWithoutOrderInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    creatorId: string
    createdAt?: Date | string
    userPhotoCard?: UserPhotoCardUncheckedCreateNestedManyWithoutPhotoCardInput
  }

  export type PhotoCardCreateOrConnectWithoutOrderInput = {
    where: PhotoCardWhereUniqueInput
    create: XOR<PhotoCardCreateWithoutOrderInput, PhotoCardUncheckedCreateWithoutOrderInput>
  }

  export type UserPhotoCardUpsertWithoutOrderInput = {
    update: XOR<UserPhotoCardUpdateWithoutOrderInput, UserPhotoCardUncheckedUpdateWithoutOrderInput>
    create: XOR<UserPhotoCardCreateWithoutOrderInput, UserPhotoCardUncheckedCreateWithoutOrderInput>
    where?: UserPhotoCardWhereInput
  }

  export type UserPhotoCardUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserPhotoCardWhereInput
    data: XOR<UserPhotoCardUpdateWithoutOrderInput, UserPhotoCardUncheckedUpdateWithoutOrderInput>
  }

  export type UserPhotoCardUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUpdateManyWithoutUserNestedInput
    photoCard?: PhotoCardUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    pointAmount?: IntFieldUpdateOperationsInput | number
    createCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutUserNestedInput
    photoCard?: PhotoCardUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PhotoCardUpsertWithoutOrderInput = {
    update: XOR<PhotoCardUpdateWithoutOrderInput, PhotoCardUncheckedUpdateWithoutOrderInput>
    create: XOR<PhotoCardCreateWithoutOrderInput, PhotoCardUncheckedCreateWithoutOrderInput>
    where?: PhotoCardWhereInput
  }

  export type PhotoCardUpdateToOneWithWhereWithoutOrderInput = {
    where?: PhotoCardWhereInput
    data: XOR<PhotoCardUpdateWithoutOrderInput, PhotoCardUncheckedUpdateWithoutOrderInput>
  }

  export type PhotoCardUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPhotoCardNestedInput
    userPhotoCard?: UserPhotoCardUpdateManyWithoutPhotoCardNestedInput
  }

  export type PhotoCardUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutPhotoCardNestedInput
  }

  export type UserPhotoCardCreateWithoutGiverInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    taker?: ExchangeCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutGiverInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    taker?: ExchangeUncheckedCreateNestedManyWithoutTakerCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutGiverInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutGiverInput, UserPhotoCardUncheckedCreateWithoutGiverInput>
  }

  export type UserPhotoCardCreateWithoutTakerInput = {
    id?: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    user: UserCreateNestedOneWithoutUserPhotoCardInput
    photoCard: PhotoCardCreateNestedOneWithoutUserPhotoCardInput
    cardArticle?: CardArticleCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderCreateNestedManyWithoutBuyerInput
    giver?: ExchangeCreateNestedManyWithoutGiverCardInput
  }

  export type UserPhotoCardUncheckedCreateWithoutTakerInput = {
    id?: string
    userId: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedCreateNestedManyWithoutUserPhotoCardInput
    order?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    giver?: ExchangeUncheckedCreateNestedManyWithoutGiverCardInput
  }

  export type UserPhotoCardCreateOrConnectWithoutTakerInput = {
    where: UserPhotoCardWhereUniqueInput
    create: XOR<UserPhotoCardCreateWithoutTakerInput, UserPhotoCardUncheckedCreateWithoutTakerInput>
  }

  export type UserPhotoCardUpsertWithoutGiverInput = {
    update: XOR<UserPhotoCardUpdateWithoutGiverInput, UserPhotoCardUncheckedUpdateWithoutGiverInput>
    create: XOR<UserPhotoCardCreateWithoutGiverInput, UserPhotoCardUncheckedCreateWithoutGiverInput>
    where?: UserPhotoCardWhereInput
  }

  export type UserPhotoCardUpdateToOneWithWhereWithoutGiverInput = {
    where?: UserPhotoCardWhereInput
    data: XOR<UserPhotoCardUpdateWithoutGiverInput, UserPhotoCardUncheckedUpdateWithoutGiverInput>
  }

  export type UserPhotoCardUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUpsertWithoutTakerInput = {
    update: XOR<UserPhotoCardUpdateWithoutTakerInput, UserPhotoCardUncheckedUpdateWithoutTakerInput>
    create: XOR<UserPhotoCardCreateWithoutTakerInput, UserPhotoCardUncheckedCreateWithoutTakerInput>
    where?: UserPhotoCardWhereInput
  }

  export type UserPhotoCardUpdateToOneWithWhereWithoutTakerInput = {
    where?: UserPhotoCardWhereInput
    data: XOR<UserPhotoCardUpdateWithoutTakerInput, UserPhotoCardUncheckedUpdateWithoutTakerInput>
  }

  export type UserPhotoCardUpdateWithoutTakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutTakerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    isRead: boolean
    message: string
    createdAt?: Date | string
  }

  export type UserPhotoCardCreateManyUserInput = {
    id?: string
    photoCardId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
  }

  export type OrderCreateManySellerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type PhotoCardCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    rank: $Enums.RankList
    genre: $Enums.Genre
    price: number
    imgUrl: string
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPhotoCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    photoCard?: PhotoCardUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
  }

  export type OrderUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserPhotoCardUpdateOneRequiredWithoutOrderNestedInput
    photocard?: PhotoCardUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCardUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUpdateManyWithoutPhotoCardNestedInput
    order?: OrderUpdateManyWithoutPhotocardNestedInput
  }

  export type PhotoCardUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPhotoCard?: UserPhotoCardUncheckedUpdateManyWithoutPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutPhotocardNestedInput
  }

  export type PhotoCardUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    genre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    price?: IntFieldUpdateOperationsInput | number
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPhotoCardCreateManyPhotoCardInput = {
    id?: string
    userId: string
    quantity: number
    price: number
    status: $Enums.UserPhotocardStatus
  }

  export type OrderCreateManyPhotocardInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userPhotoCardId: string
    userId: string
    createdAt?: Date | string
  }

  export type UserPhotoCardUpdateWithoutPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    user?: UserUpdateOneRequiredWithoutUserPhotoCardNestedInput
    cardArticle?: CardArticleUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateWithoutPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
    cardArticle?: CardArticleUncheckedUpdateManyWithoutUserPhotoCardNestedInput
    order?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    giver?: ExchangeUncheckedUpdateManyWithoutGiverCardNestedInput
    taker?: ExchangeUncheckedUpdateManyWithoutTakerCardNestedInput
  }

  export type UserPhotoCardUncheckedUpdateManyWithoutPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumUserPhotocardStatusFieldUpdateOperationsInput | $Enums.UserPhotocardStatus
  }

  export type OrderUpdateWithoutPhotocardInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserPhotoCardUpdateOneRequiredWithoutOrderNestedInput
    seller?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPhotocardInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutPhotocardInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userPhotoCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardArticleCreateManyUserPhotoCardInput = {
    id?: string
    price: number
    totalQuantity: number
    remainingQuantity: number
    exchangeText: string
    exchangeRank: $Enums.RankList
    exchangeGenre: $Enums.Genre
    createdAt?: Date | string
  }

  export type OrderCreateManyBuyerInput = {
    id?: string
    quantity: number
    price: number
    totalPrice: number
    userId: string
    photoCardId: string
    createdAt?: Date | string
  }

  export type ExchangeCreateManyGiverCardInput = {
    id?: string
    takerCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type ExchangeCreateManyTakerCardInput = {
    id?: string
    giverCardId: string
    description: string
    status: $Enums.ExchangeStatus
    createdAt?: Date | string
  }

  export type CardArticleUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardArticleUncheckedUpdateWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardArticleUncheckedUpdateManyWithoutUserPhotoCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalQuantity?: IntFieldUpdateOperationsInput | number
    remainingQuantity?: IntFieldUpdateOperationsInput | number
    exchangeText?: StringFieldUpdateOperationsInput | string
    exchangeRank?: EnumRankListFieldUpdateOperationsInput | $Enums.RankList
    exchangeGenre?: EnumGenreFieldUpdateOperationsInput | $Enums.Genre
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutOrderNestedInput
    photocard?: PhotoCardUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    photoCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUpdateWithoutGiverCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takerCard?: UserPhotoCardUpdateOneRequiredWithoutTakerNestedInput
  }

  export type ExchangeUncheckedUpdateWithoutGiverCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    takerCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateManyWithoutGiverCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    takerCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUpdateWithoutTakerCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giverCard?: UserPhotoCardUpdateOneRequiredWithoutGiverNestedInput
  }

  export type ExchangeUncheckedUpdateWithoutTakerCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeUncheckedUpdateManyWithoutTakerCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverCardId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumExchangeStatusFieldUpdateOperationsInput | $Enums.ExchangeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}