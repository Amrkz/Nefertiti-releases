# Nefertiti — downloads

Nefertiti is a desktop DICOM viewer for CT, MRI and X-ray images, made for private specialist clinics. It opens the CD or USB a patient brings, keeps a private encrypted library on the computer, and lets you view, measure and compare studies. It works offline: no network calls, no telemetry.

> **For reference only, not for diagnosis.** Nefertiti is not a medical device and has not been cleared or registered by any regulator (including the EDA in Egypt or the SFDA in Saudi Arabia).

This repository holds **installers only**. **The source code is proprietary and not published.**

## Supported systems

| System | File |
| --- | --- |
| Windows 10 or 11, 64-bit (x64) | `Nefertiti_<version>_x64-setup.exe` (downloads Microsoft WebView2 during install if it is missing) |
| Windows 10 or 11, 64-bit, no network | `Nefertiti_<version>_x64-offline-webview2-setup.exe` (includes the WebView2 installer) |
| macOS on an Intel Mac | `Nefertiti_<version>_x64.dmg` |

## Download

1. Open the [Releases](../../releases) page.
2. Pick the newest release and download the file for your system, plus `SHA256SUMS`.
3. Check the file (below), then run the installer.

The current pre-release is [v0.0.1](https://github.com/Amrkz/Nefertiti-releases/releases/tag/v0.0.1). For Windows 10 or 11 (64-bit), download [`Nefertiti_0.0.1_x64-setup.exe`](https://github.com/Amrkz/Nefertiti-releases/releases/download/v0.0.1/Nefertiti_0.0.1_x64-setup.exe) and [`SHA256SUMS`](https://github.com/Amrkz/Nefertiti-releases/releases/download/v0.0.1/SHA256SUMS). This build is unsigned: Windows SmartScreen may warn; click **More info**, then **Run anyway**. macOS and the offline WebView2 installer are not in this pre-release.

## Check the download (SHA256SUMS)

`SHA256SUMS` lists one SHA-256 checksum per installer. The checksum of your file must match its line exactly.

**Windows (PowerShell):**

```powershell
Get-FileHash .\Nefertiti_<version>_x64-setup.exe -Algorithm SHA256
```

Compare the `Hash` value with the line for that file in `SHA256SUMS` (case does not matter).

**macOS (Terminal), in the folder with the downloads:**

```bash
shasum -a 256 -c SHA256SUMS --ignore-missing
```

It prints `OK` next to each file that matches. If a file does not match, delete it and download it again. Do not run it.

## Licence

Copyright (c) 2026 Amr Qazzaz. All rights reserved. Nefertiti is proprietary software. See [LICENSE](LICENSE). Third-party components bundled with the app keep their own licences; see [NOTICE](NOTICE).

## Contact

Questions, problems and feature requests: open an issue in the [Issues](../../issues) tab. **Never attach patient images, names or IDs to an issue.**

---

<div dir="rtl" lang="ar">

## نفرتيتي — التنزيلات

نفرتيتي برنامج سطح مكتب لعرض صور DICOM للأشعة المقطعية والرنين المغناطيسي والأشعة السينية، مصمم للعيادات التخصصية الخاصة. يفتح القرص المدمج أو ذاكرة USB التي يحضرها المريض، ويحفظ مكتبة خاصة مشفّرة على الجهاز، ويتيح عرض الدراسات وقياسها ومقارنتها. يعمل دون اتصال بالشبكة: لا اتصالات شبكية ولا تتبّع.

> **للاستئناس فقط، وليس للتشخيص.** نفرتيتي ليس جهازًا طبيًا، ولم يُعتمد أو يُسجَّل لدى أي جهة تنظيمية (بما في ذلك هيئة الدواء المصرية والهيئة العامة للغذاء والدواء السعودية).

يحتوي هذا المستودع على **ملفات التثبيت فقط**. **الشيفرة المصدرية مملوكة وغير منشورة.**

### الأنظمة المدعومة

- ويندوز 10 أو 11، 64 بت: الملف `Nefertiti_<version>_x64-setup.exe` (يُنزّل WebView2 من مايكروسوفت أثناء التثبيت إذا لم يكن موجودًا).
- ويندوز 10 أو 11 دون اتصال بالشبكة: الملف `Nefertiti_<version>_x64-offline-webview2-setup.exe`.
- ماك بمعالج Intel: الملف `Nefertiti_<version>_x64.dmg`.

### التنزيل

1. افتح صفحة [Releases](../../releases).
2. اختر أحدث إصدار ونزّل الملف المناسب لنظامك، ومعه الملف `SHA256SUMS`.
3. تحقّق من الملف (انظر أدناه)، ثم شغّل برنامج التثبيت.

الإصدار الحالي التجريبي هو [v0.0.1](https://github.com/Amrkz/Nefertiti-releases/releases/tag/v0.0.1). لنظام ويندوز 10 أو 11 (64 بت) نزّل [`Nefertiti_0.0.1_x64-setup.exe`](https://github.com/Amrkz/Nefertiti-releases/releases/download/v0.0.1/Nefertiti_0.0.1_x64-setup.exe) و[`SHA256SUMS`](https://github.com/Amrkz/Nefertiti-releases/releases/download/v0.0.1/SHA256SUMS). هذا البناء غير موقّع: قد يحذّر Windows SmartScreen؛ اضغط **More info** ثم **Run anyway**. ملفا ماك ومثبت WebView2 دون اتصال ليسا ضمن هذا الإصدار التجريبي.

### التحقق من الملف (SHA256SUMS)

يحتوي `SHA256SUMS` على بصمة SHA-256 لكل ملف تثبيت، ويجب أن تطابق بصمة ملفك سطره تمامًا.

- ويندوز (PowerShell): شغّل `Get-FileHash` على الملف مع `-Algorithm SHA256` وقارن قيمة `Hash` بالسطر الخاص به.
- ماك (Terminal): في مجلد التنزيلات شغّل `shasum -a 256 -c SHA256SUMS --ignore-missing`، ويجب أن تظهر كلمة `OK` بجانب الملف.

إذا لم تتطابق البصمة فاحذف الملف ونزّله من جديد، ولا تشغّله.

### الترخيص

حقوق النشر (c) 2026 عمرو قزاز. جميع الحقوق محفوظة. نفرتيتي برنامج مملوك؛ انظر [LICENSE](LICENSE). مكوّنات الأطراف الثالثة المضمّنة تبقى برخصها؛ انظر [NOTICE](NOTICE).

### التواصل

للأسئلة والمشكلات والاقتراحات افتح بلاغًا في تبويب [Issues](../../issues). **لا ترفق أبدًا صور مرضى أو أسماءهم أو أرقام هوياتهم.**

</div>
