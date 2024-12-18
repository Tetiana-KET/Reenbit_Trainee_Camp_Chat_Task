import cloudinary from '../lib/cloudinary';

export async function getImageUrl(
	image: string | undefined
): Promise<string | null> {
	if (!image) return null;

	try {
		const uploadImgResponse = await cloudinary.uploader.upload(image);
		return uploadImgResponse.secure_url;
	} catch (error) {
		console.error('Image upload failed:', error);
		return null;
	}
}
