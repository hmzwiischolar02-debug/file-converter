# FileConvert — Complete SaaS Platform
## Free Online File Converter

---

## 📁 Project Structure

```
file-converter/
├── frontend/                    # React + Vite + Tailwind
│   ├── index.html               # SEO meta tags, AdSense, Analytics
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx             # React entry point
│       ├── index.css            # Tailwind + global styles
│       └── App.jsx              # Full app (router, all pages, components)
│
├── backend/                     # FastAPI (Python)
│   ├── main.py                  # All API routes + conversion logic
│   └── requirements.txt
│
└── README.md                    # This file
```

---

## ⚡ Quick Start (Local Development)

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Optional: install LibreOffice for best Word↔PDF conversion
# Ubuntu/Debian: sudo apt install libreoffice
# macOS: brew install libreoffice

uvicorn main:app --reload --port 8000
# → http://localhost:8000
# → Docs: http://localhost:8000/docs
```

---

## 🛠️ Conversion Libraries Used

| Conversion      | Primary Library  | Fallback              |
|-----------------|------------------|-----------------------|
| PDF → Word      | pdf2docx         | pypdf + python-docx   |
| Word → PDF      | LibreOffice CLI  | reportlab             |
| JPG/PNG → PDF   | Pillow + reportlab | —                   |
| PDF → JPG       | pdf2image (poppler) | pypdf images       |
| PNG → ICO       | Pillow           | —                     |
| Merge PDF       | pypdf            | —                     |
| Compress PDF    | pypdf            | —                     |

---

## 🚀 Deployment

### Frontend — Vercel (Recommended)

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

**Or connect GitHub repo to Vercel:**
1. Push code to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Vite
4. Build command: `npm run build`
5. Output dir: `dist`
6. Add env var: `VITE_API_URL=https://your-backend.railway.app`

---

### Backend — Railway (Easiest)

1. Go to railway.app → New Project → Deploy from GitHub
2. Select your backend folder
3. Add environment variables (none required for basic setup)
4. Railway auto-detects Python and installs dependencies
5. Add `Procfile`:

```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

**Or Deploy to Render:**
1. render.com → New Web Service → Connect GitHub
2. Build command: `pip install -r requirements.txt`
3. Start command: `uvicorn main:app --host 0.0.0.0 --port 10000`

**Or VPS (Ubuntu):**
```bash
# Install dependencies
sudo apt update
sudo apt install python3 python3-pip python3-venv libreoffice poppler-utils -y

# Setup app
git clone https://github.com/yourname/fileconvert.git
cd fileconvert/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run with gunicorn + nginx
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000

# Setup nginx reverse proxy
sudo nano /etc/nginx/sites-available/fileconvert
```

**Nginx config:**
```nginx
server {
    listen 80;
    server_name api.fileconvert.io;

    client_max_body_size 15M;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_read_timeout 120s;
    }
}
```

---

### Storage — AWS S3 (Optional, for scalability)

Replace local file storage with S3 for multi-server deployments:

```python
# pip install boto3
import boto3

s3 = boto3.client("s3",
    aws_access_key_id=os.environ["AWS_ACCESS_KEY"],
    aws_secret_access_key=os.environ["AWS_SECRET_KEY"],
    region_name="us-east-1",
)

def upload_to_s3(data: bytes, key: str) -> str:
    s3.put_object(Bucket="fileconvert-temp", Key=key, Body=data)
    # Generate presigned URL (1 hour)
    url = s3.generate_presigned_url("get_object",
        Params={"Bucket": "fileconvert-temp", "Key": key},
        ExpiresIn=3600
    )
    return url
```

Use AWS Lambda + S3 lifecycle rules to auto-delete files after 1 hour.

---

## 🔍 SEO Strategy

### Per-Tool URL Structure
```
fileconvert.io/tool/pdf-to-word     → "convert pdf to word free"
fileconvert.io/tool/word-to-pdf     → "word to pdf free online"
fileconvert.io/tool/jpg-to-pdf      → "jpg to pdf converter free"
fileconvert.io/tool/pdf-to-jpg      → "pdf to jpg converter online"
fileconvert.io/tool/png-to-ico      → "png to ico favicon converter"
fileconvert.io/tool/merge-pdf       → "merge pdf files free online"
fileconvert.io/tool/compress-pdf    → "compress pdf size free"
```

### Target Keywords (High Volume)
| Keyword                          | Monthly Volume | Difficulty |
|----------------------------------|----------------|------------|
| pdf to word                      | 1.2M           | Medium     |
| compress pdf                     | 900K           | Medium     |
| merge pdf                        | 740K           | Medium     |
| jpg to pdf                       | 620K           | Low        |
| word to pdf                      | 580K           | Low        |
| pdf to jpg                       | 440K           | Low        |
| png to ico                       | 110K           | Low        |

### On-Page SEO Checklist
- [x] Unique `<title>` per tool page (auto-generated in React)
- [x] Unique `<meta description>` per tool page
- [x] Keyword-rich H1 headings
- [x] FAQ schema markup (add JSON-LD per tool page)
- [x] Structured data (WebApplication schema in index.html)
- [x] Canonical URLs
- [x] Sitemap (generate below)
- [ ] Submit sitemap to Google Search Console

### Generate sitemap.xml
```javascript
// scripts/generate-sitemap.js
const tools = ["pdf-to-word","word-to-pdf","jpg-to-pdf","pdf-to-jpg","png-to-ico","merge-pdf","compress-pdf"];
const base = "https://fileconvert.io";
const date = new Date().toISOString().split("T")[0];

const urls = [
  `<url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
  `<url><loc>${base}/#/tools</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
  ...tools.map(id =>
    `<url><loc>${base}/#/tool/${id}</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>${date}</lastmod></url>`
  )
].join("\n");

console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
```

---

## 💰 Monetization Strategy

### Google AdSense Setup
1. Apply at adsense.google.com with your live domain
2. Replace AdSense placeholder divs in `AdBanner` component:

```jsx
function AdBanner({ slot, position }) {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
    catch (e) {}
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", width: "100%", height: position === "horizontal" ? "90px" : "250px" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
```

### Ad Placement Strategy (Optimized for CTR)
| Position          | Ad Unit Type   | Expected CTR |
|-------------------|---------------|--------------|
| Header banner     | Leaderboard    | 0.3–0.5%     |
| Between sections  | Rectangle      | 0.8–1.5%     |
| Before download   | Rectangle      | 2–4% ⭐      |
| Below FAQ         | Responsive     | 0.5–1%       |

**Pro tip:** The "before download button" ad is the HIGHEST CTR placement because users are engaged and waiting.

### Revenue Projections
- 10,000 daily visitors × $2 RPM (avg) = **$20/day = $600/month**
- 50,000 daily visitors × $2.50 RPM = **$125/day = $3,750/month**
- 200,000 daily visitors × $3 RPM = **$600/day = $18,000/month**

### Pro Plan Upsell (Future Monetization)
```
Free Plan:   10MB limit, 3 conversions/hour, ads shown
Pro Plan:    $7.99/month – 100MB, unlimited, no ads, batch convert
Team Plan:   $29.99/month – API access, 500MB, priority queue
```

---

## 🔒 Security

### File Validation
```python
MAGIC_BYTES = {
    "application/pdf": b"%PDF",
    "image/jpeg": b"\xff\xd8\xff",
    "image/png": b"\x89PNG",
}

def validate_magic_bytes(file_path: Path, expected_mime: str):
    magic = MAGIC_BYTES.get(expected_mime)
    if magic:
        with open(file_path, "rb") as f:
            header = f.read(len(magic))
        if header != magic:
            raise HTTPException(422, "File content doesn't match declared type")
```

### Rate Limiting
```python
# pip install slowapi
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.post("/convert/pdf-to-word")
@limiter.limit("10/minute")
async def pdf_to_word(request: Request, ...):
    ...
```

---

## 📈 Performance Optimization

### Backend
- Use `asyncio.run_in_executor` for CPU-bound conversions (already done)
- Add Redis caching for repeated conversions of same file (hash-based)
- Use Celery + Redis for task queue (for high traffic)

### Frontend
- Vite auto-splits chunks
- Lazy load tool pages with `React.lazy()`
- Images: use WebP format

### Caching Strategy
```python
import hashlib
cache = {}  # Replace with Redis in production

def get_cache_key(data: bytes, tool: str) -> str:
    return f"{tool}:{hashlib.md5(data).hexdigest()}"
```

---

## 🎯 Viral / Bonus Features

### Recent Conversions Counter
- Stored in Redis, incremented on each conversion
- Displayed in `StatsBar` component
- Creates social proof and urgency

### Share Button
- Uses Web Share API (mobile) with clipboard fallback
- "Converted with FileConvert.io" branding in every downloaded filename

### Branding
- Every output file is named: `fileconvert_[original_name].[ext]`
- Footer watermark on downloaded files (optional for Pro removal)

---

## 🧪 Testing

```bash
# Test backend API
curl -X POST http://localhost:8000/convert/pdf-to-word \
  -F "files=@test.pdf" \
  --output converted.docx

# Run with pytest
pip install pytest httpx
pytest tests/
```

---

## 📋 Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://api.fileconvert.io
VITE_GA_ID=G-XXXXXXXXXX
```

### Backend (.env)
```
MAX_FILE_SIZE=10485760
FILE_TTL_SECONDS=3600
AWS_ACCESS_KEY=...
AWS_SECRET_KEY=...
AWS_BUCKET=fileconvert-temp
REDIS_URL=redis://localhost:6379
```
