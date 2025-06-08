from fastapi import FastAPI # type: ignore
from routers import convert

app = FastAPI(
    title="🚀 Conversor de Arquivos",
    description="""
### Bem-vindo à API de Conversão de Arquivos 🧩

Converta arquivos entre os seguintes formatos:
- **JPG**, **JPEG**, **PNG** → **PDF**
- **PDF** → **DOCX**, **TXT**, **Imagem**
- **DOCX** → **PDF**

> Basta enviar um arquivo para o endpoint correspondente e receber o resultado convertido.

📂 Todos os arquivos são processados localmente e excluídos após o download.
""",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.include_router(convert.router)

@app.on_event("startup")
async def startup_event():
    print("\n📎 Documentação disponível em: http://127.0.0.1:8000/docs")
    print("📘 Documentação alternativa: http://127.0.0.1:8000/redoc\n")