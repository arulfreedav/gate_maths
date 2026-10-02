"""
Script to generate standard Microsoft PowerPoint (.pptx) presentation
for Module 1A: Linear Algebra (Matrices, Determinants, Rank & Inverses).
Requires: pip install python-pptx
"""

import sys

try:
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.enum.text import PP_ALIGN
    from pptx.dml.color import RGBColor
except ImportError:
    print("python-pptx is not installed. Run: pip install python-pptx")
    sys.exit(0)

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Color Palette
DARK_BG = RGBColor(10, 14, 23)
TEXT_WHITE = RGBColor(241, 245, 249)
ACCENT_BLUE = RGBColor(59, 130, 246)
ACCENT_GREEN = RGBColor(16, 185, 129)
ACCENT_AMBER = RGBColor(245, 158, 11)
CARD_BG = RGBColor(24, 34, 52)

blank_layout = prs.slide_layouts[6]

def set_slide_background(slide):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = DARK_BG

def add_header(slide, title_text, category_text="GATE 2027 • LINEAR ALGEBRA"):
    # Category / Tag
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(11.7), Inches(0.4))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = category_text.upper()
    p_tag.font.size = Pt(11)
    p_tag.font.bold = True
    p_tag.font.color.rgb = ACCENT_AMBER
    
    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.85), Inches(11.7), Inches(0.8))
    tf = title_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

slides_data = [
    {
        "type": "concept",
        "title": "Module 1A: Matrices, Determinants & Rank Roadmap",
        "category": "GATE CS (Sec 1) & DA (Sec 2) Foundation",
        "bullets": [
            "• Determinant properties: |kA| = k^n |A|, |AB| = |A||B|, and Adjoint formulas |adj(A)| = |A|^(n-1).",
            "• Rank & Nullity: Dimension Theorem Rank(A) + Nullity(A) = n (columns).",
            "• Rank of Outer Products: For non-zero vectors u, v, Rank(u v^T) = 1.",
            "• Transpose Products: Rank(A^T A) = Rank(A) and Null(A^T A) = Null(A) (Crucial for DA & ML).",
            "• Idempotent & Projection Matrices: P^2 = P ==> eigenvalues are 0 or 1, Trace(P) = Rank(P)."
        ]
    },
    {
        "type": "question",
        "title": "Q1 (GATE CS 2020 • 1 Mark): Invertible Matrix Identities",
        "category": "GATE CS 2020 • MCQ",
        "question": "Let A and B be n x n invertible real matrices. Which of the following statements is NOT necessarily TRUE?\n\n(A) det(A^(-1)) = (det(A))^(-1)\n(B) det(A^T) = det(A)\n(C) det(A + B) = det(A) + det(B)\n(D) det(kA) = k^n det(A) for any scalar k in R",
        "solution": "CORRECT ANSWER: (C)\n\n• Shortcut: Counterexample: Let A = I_2, B = -I_2. Then det(A) = 1, det(B) = 1, but A+B = 0 ==> det(A+B) = 0 != 1 + 1 = 2.\n• Determinants are multilinear with respect to individual rows/columns, NOT additive over matrices!"
    },
    {
        "type": "question",
        "title": "Q2 (GATE CS 2018 • 2 Marks): Rank of 4x4 Matrix",
        "category": "GATE CS 2018 • MCQ",
        "question": "The rank of the matrix M is:\n\n[ 1  1  1  0 ]\n[ 1  1  0  1 ]\n[ 1  0  1  1 ]\n[ 0  1  1  1 ]\n\n(A) 1         (B) 2         (C) 3         (D) 4",
        "solution": "CORRECT ANSWER: (D) Rank = 4\n\n• Shortcut: Sum of elements in each row is 3. Adding R2+R3+R4 to R1 gives [3 3 3 3].\n• Elementary Row Operations reduce M to upper triangular form with pivots 1, 1, 1, 3 on the diagonal.\n• Since all 4 diagonal pivots are non-zero, det(M) = 3 != 0. Thus, Rank(M) = 4."
    },
    {
        "type": "question",
        "title": "Q3 (GATE CS 2021 Set 1 • 1 Mark): Rank of Outer Product",
        "category": "GATE CS 2021 • MCQ",
        "question": "Let x and y be non-zero vectors in R^n (n >= 2). Consider the n x n matrix M = x y^T. What is the rank of matrix M?\n\n(A) 0         (B) 1         (C) 2         (D) n",
        "solution": "CORRECT ANSWER: (B) Rank = 1\n\n• The columns of M = [ y1*x, y2*x, ..., yn*x ].\n• Every column is a scalar multiple of vector x. Thus Col(M) = span{x}, dim(Col(M)) = 1.\n• By Rank-Nullity theorem, Nullity(M) = n - 1."
    },
    {
        "type": "question",
        "title": "Q4 (GATE DA 2024 • 1 Mark): Rank & Null Space of Transpose Products",
        "category": "GATE DA 2024 • MCQ",
        "question": "Let A be an m x n matrix with real entries. Which of the following statements is ALWAYS TRUE?\n\n(A) Null(A^T A) = Null(A)\n(B) Rank(A^T A) < Rank(A) when m < n\n(C) Null(A A^T) = Null(A^T A)\n(D) A^T A is always invertible",
        "solution": "CORRECT ANSWER: (A)\n\n• Proof: If x in Null(A), Ax = 0 ==> A^T A x = 0 ==> x in Null(A^T A).\n• If x in Null(A^T A), (A^T A)x = 0 ==> x^T A^T A x = ||Ax||^2 = 0 ==> Ax = 0 ==> x in Null(A).\n• Consequently, Rank(A^T A) = Rank(A)."
    },
    {
        "type": "question",
        "title": "Q5 (GATE DA 2024 • 2 Marks MSQ): Rank Inequalities",
        "category": "GATE DA 2024 • MSQ",
        "question": "Let A, B in R^(n x n). Which of the following statements is/are ALWAYS TRUE?\n\n(A) Rank(A + B) <= Rank(A) + Rank(B)\n(B) Rank(AB) <= min(Rank(A), Rank(B))\n(C) Rank(AB) = Rank(BA)\n(D) If A and B are invertible, then Rank(AB) = n",
        "solution": "CORRECT OPTIONS: (A), (B), (D)\n\n• (A) is TRUE: Col(A+B) is contained in Col(A) + Col(B).\n• (B) is TRUE: Col(AB) is a subspace of Col(A).\n• (C) is FALSE: Let A = [1 0; 0 0], B = [0 1; 0 0]. AB has rank 1, BA has rank 0.\n• (D) is TRUE: Product of invertible matrices is invertible, hence full rank n."
    }
]

for sdata in slides_data:
    slide = prs.slides.add_slide(blank_layout)
    set_slide_background(slide)
    add_header(slide, sdata["title"], sdata["category"])
    
    if sdata["type"] == "concept":
        box = slide.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(11.3), Inches(4.8))
        tf = box.text_frame
        tf.word_wrap = True
        for b in sdata["bullets"]:
            p = tf.add_paragraph()
            p.text = b
            p.font.size = Pt(18)
            p.font.color.rgb = TEXT_WHITE
            p.space_after = Pt(14)
            
    elif sdata["type"] == "question":
        # Question box (Top half)
        q_box = slide.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(11.3), Inches(2.4))
        tf_q = q_box.text_frame
        tf_q.word_wrap = True
        p_q = tf_q.paragraphs[0]
        p_q.text = sdata["question"]
        p_q.font.size = Pt(16)
        p_q.font.color.rgb = TEXT_WHITE
        
        # Hidden/Paired Solution Box (Bottom half)
        s_box = slide.shapes.add_textbox(Inches(1.0), Inches(4.4), Inches(11.3), Inches(2.5))
        tf_s = s_box.text_frame
        tf_s.word_wrap = True
        p_s = tf_s.paragraphs[0]
        p_s.text = sdata["solution"]
        p_s.font.size = Pt(15)
        p_s.font.color.rgb = ACCENT_GREEN

output_path = "Module1A_Matrices_Determinants_Rank.pptx"
prs.save(output_path)
print(f"Successfully generated PowerPoint presentation: {output_path}")
