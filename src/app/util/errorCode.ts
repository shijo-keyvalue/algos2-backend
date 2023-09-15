/**
 * Custom error codes to be send to UI to display proper a response
 */
export const ErrorCodes: { [key: string]: CustomError } = {
    GARDEN_SITE_NOT_FOUND: {
        CODE: "GARDEN_SITE_NOT_FOUND",
        MESSAGE: "Garden site not found",
    },
    UNAUTHORIZED: {
        CODE: "UNAUTHORIZED",
        MESSAGE: "User is not allowed to perform this operation",
    },
    USER_NOT_FOUND: {
        CODE: "USER_NOT_FOUND",
        MESSAGE: "User not found",
    },
    USER_WITH_ID_NOT_FOUND: {
        CODE: "USER_WITH_ID_NOT_FOUND",
        MESSAGE: "User with given id not found",
    },
    VALIDATION_ERROR: {
        CODE: "VALIDATION_ERROR",
        MESSAGE: "Validation failed error",
    },
    USER_ALREADY_REGISTERED_ERROR: {
        CODE: "USER_ALREADY_REGISTERED_ERROR",
        MESSAGE: "User already registered",
    },
    USER_NOT_VERIFIED_ERROR: {
        CODE: "USER_NOT_VERIFIED_ERROR",
        MESSAGE: "User not verified",
    },
    RIDER_NOT_FOUND: {
        CODE: "RIDER_NOT_FOUND",
        MESSAGE: "Ride not found",
    },
    PRODUCT_NOT_FOUND: {
        CODE: "PRODUCT_NOT_FOUND",
        MESSAGE: "Product not found",
    },
};

/**
 * Interface to describe custom errors
 */
export interface CustomError {
    CODE: string;
    MESSAGE: string;
}
