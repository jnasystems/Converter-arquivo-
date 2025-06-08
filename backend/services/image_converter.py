from PIL import Image

def convert_jpg_to_pdf(input_path, output_path):
    image = Image.open(input_path).convert("RGB")
    image.save(output_path, "PDF")


def convert_jpeg_to_png(input_path, output_path):
    image = Image.open(input_path).convert("RGB")
    image.save(output_path, "PNG")


def convert_png_to_jpg(input_path, output_path):
    image = Image.open(input_path).convert("RGB")
    image.save(output_path, "JPEG")
