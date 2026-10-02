"""
PDF Generator for Linear Algebra Exhaustive Handbook
This script converts the HTML handbook to PDF or uses ReportLab to create the PDF document.

Method 1: Using Chrome / Edge Headless (Built into Windows 10/11 - No installs needed!):
    Run in terminal:
    msedge --headless --disable-gpu --print-to-pdf="Linear_Algebra_Exhaustive_GATE_Handbook.pdf" Linear_Algebra_Exhaustive_GATE_Handbook.html
    OR
    chrome --headless --disable-gpu --print-to-pdf="Linear_Algebra_Exhaustive_GATE_Handbook.pdf" Linear_Algebra_Exhaustive_GATE_Handbook.html

Method 2: One-click in your browser:
    Open `Linear_Algebra_Exhaustive_GATE_Handbook.html` in Chrome/Edge and click the red "🖨️ Save as PDF / Print Handbook" button!
"""

import os
import subprocess
import sys

def convert_html_to_pdf():
    html_file = os.path.abspath("Linear_Algebra_Exhaustive_GATE_Handbook.html")
    pdf_file = os.path.abspath("Linear_Algebra_Exhaustive_GATE_Handbook.pdf")

    # Common browser executable paths on Windows
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    ]
    chrome_paths = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    ]

    browser_exe = None
    for p in edge_paths + chrome_paths:
        if os.path.exists(p):
            browser_exe = p
            break

    if browser_exe:
        print(f"Found browser engine at: {browser_exe}")
        cmd = [
            browser_exe,
            "--headless",
            "--disable-gpu",
            f"--print-to-pdf={pdf_file}",
            f"file:///{html_file}"
        ]
        try:
            print("Exporting publication-grade PDF with KaTeX math rendering...")
            subprocess.run(cmd, check=True)
            if os.path.exists(pdf_file):
                print(f"SUCCESS: PDF generated at: {pdf_file}")
                return True
        except Exception as e:
            print(f"Subprocess call failed: {e}")

    print("\nAlternative: Simply open `Linear_Algebra_Exhaustive_GATE_Handbook.html` in Chrome/Edge and click 'Save as PDF' (or press Ctrl + P)!")
    return False

if __name__ == "__main__":
    convert_html_to_pdf()
