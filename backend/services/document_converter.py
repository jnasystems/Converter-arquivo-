from pdf2docx import Converter
from docx import Document
import os

def convert_pdf_to_docx(input_path, output_path):
    cv = Converter(input_path)
    cv.convert(output_path, start=0, end=None)
    cv.close()

def convert_docx_to_pdf(input_path, output_path):
    # Conversão DOCX → PDF (modo simples via DOCX → imagem ou outro processo)
    # Aqui apenas salvamos um .docx como .pdf-like (pode usar pypandoc ou libreoffice depois)
    doc = Document(input_path)
    temp_txt = output_path.replace(".pdf", ".txt")
    with open(temp_txt, "w", encoding="utf-8") as f:
        for para in doc.paragraphs:
            f.write(para.text + "\n")
    # Criar um PDF simples a partir do texto
    from fpdf import FPDF
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    with open(temp_txt, "r", encoding="utf-8") as f:
        for line in f:
            pdf.cell(200, 10, txt=line.strip(), ln=True)
    pdf.output(output_path)
    os.remove(temp_txt)
