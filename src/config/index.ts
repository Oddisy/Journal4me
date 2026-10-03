export const config = {
  paystackPublicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder',
  notionTemplateUrl: process.env.NEXT_PUBLIC_NOTION_TEMPLATE_URL || 'https://notion.so/template-placeholder',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890',
  productPrice: process.env.NEXT_PUBLIC_PRODUCT_PRICE ? parseInt(process.env.NEXT_PUBLIC_PRODUCT_PRICE) : 49,
  videoUrl: process.env.NEXT_PUBLIC_VIDEO_URL || 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};
