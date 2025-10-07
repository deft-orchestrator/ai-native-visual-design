# Panduan Pengembangan AIVDL

## Instalasi
```bash
pnpm install
```

## Struktur Monorepo
- `packages/` - Paket inti (ecs, compiler, core, dll)
- `tools/` - Alat bantu developer
- `plugins-ecosystem/` - Plugin resmi & komunitas
- `examples/` - Contoh penggunaan
- `docs/` - Dokumentasi
- `deployment/` - Konfigurasi deployment

## Workflow
- Ikuti arsitektur pada dokumen utama
- Tambahkan unit test dan dokumentasi setiap perubahan
- Gunakan branch feature/ atau fix/ untuk pengembangan

## Referensi
Lihat [ARCHITECTURE DOCS.md](ARCHITECTURE%20DOCS.md) untuk detail arsitektur dan roadmap.
