from fastapi import APIRouter, UploadFile, File
from fastapi.responses import FileResponse
from services.image_converter import convert_jpeg_to_png, convert_png_to_jpg
from services.document_converter import convert_pdf_to_docx, convert_docx_to_pdf
from services.image_converter import convert_jpg_to_pdf
import uuid
import os

router = APIRouter(prefix="/convert", tags=["Conversão"])


def save_uploaded_file(file: UploadFile, extension: str) -> str:
    import os
    os.makedirs('temp', exist_ok=True)  # <- Garante que a pasta existe!
    file_id = str(uuid.uuid4())
    file_path = f"temp/{file_id}.{extension}"
    with open(file_path, "wb") as f:
        f.write(file.file.read())
    return file_path



@router.post("/jpg-to-pdf")
async def jpg_to_pdf(file: UploadFile = File(...)):
    input_path = save_uploaded_file(file, "jpg")
    output_path = input_path.replace(".jpg", ".pdf")
    convert_jpg_to_pdf(input_path, output_path)
    return FileResponse(output_path, filename="convertido.pdf")


@router.post("/jpeg-to-png")
async def jpeg_to_png(file: UploadFile = File(...)):
    input_path = save_uploaded_file(file, "jpeg")
    output_path = input_path.replace(".jpeg", ".png")
    convert_jpeg_to_png(input_path, output_path)
    return FileResponse(output_path, filename="convertido.png")


@router.post("/png-to-jpg")
async def png_to_jpg(file: UploadFile = File(...)):
    input_path = save_uploaded_file(file, "png")
    output_path = input_path.replace(".png", ".jpg")
    convert_png_to_jpg(input_path, output_path)
    return FileResponse(output_path, filename="convertido.jpg")


@router.post("/pdf-to-docx")
async def pdf_to_docx(file: UploadFile = File(...)):
    input_path = save_uploaded_file(file, "pdf")
    output_path = input_path.replace(".pdf", ".docx")
    convert_pdf_to_docx(input_path, output_path)
    return FileResponse(output_path, filename="convertido.docx")


@router.post("/docx-to-pdf")
async def docx_to_pdf(file: UploadFile = File(...)):
    input_path = save_uploaded_file(file, "docx")
    output_path = input_path.replace(".docx", ".pdf")
    convert_docx_to_pdf(input_path, output_path)
    return FileResponse(output_path, filename="convertido.pdf")
