export interface MessageInterface {
	_id: string;
	senderId: string;
	receiverId: string;
	text: string;
	image: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface LastMessageData {
	userId: string;
	_id: string;
	text: string;
	image: string | null;
	updatedAt: string;
}
