export enum HttpStatusMessage {
	OK = 'OK',
	CREATED = 'A new resource was created successfully',
	BAD_REQUEST = 'Bad Request',
	UNAUTHORIZED = "It seems you're not authorized to access this resource. Please log in or contact support if you believe this is a mistake.",
	NOT_FOUND = "Not Found! The page you're looking for doesn't exist.",
	INTERNAL_SERVER_ERROR = 'Internal Server Error',
}
