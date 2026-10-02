"""
Master PowerPoint (.pptx) Generator for All GATE 2027 Mathematics Modules.
Covers:
- Module 1A: Linear Algebra (Matrices, Determinants, Rank)
- Module 1B: Linear Systems (Ax=b), LU Decomposition, Eigenvalues & SVD
- Module 2: Probability & Statistics (Distributions, Bayes, Inference)
- Module 3: Discrete Mathematics (Logic, Sets, Relations, Graphs, Groups)
- Module 4: Calculus & Optimization (Limits, Taylor Series, Extrema, Integrals)

Usage:
    pip install python-pptx
    python generate_all_pptx.py
"""

import sys

try:
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.dml.color import RGBColor
except ImportError:
    print("python-pptx is not installed. To generate PPTX files, run: pip install python-pptx")
    sys.exit(0)

# Visual styling constants
DARK_BG = RGBColor(10, 14, 23)
TEXT_WHITE = RGBColor(241, 245, 249)
ACCENT_BLUE = RGBColor(59, 130, 246)
ACCENT_GREEN = RGBColor(16, 185, 129)
ACCENT_AMBER = RGBColor(245, 158, 11)
ACCENT_CYAN = RGBColor(6, 182, 212)

def set_slide_background(slide):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = DARK_BG

def add_header(slide, title_text, category_text):
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(11.7), Inches(0.4))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = category_text.upper()
    p_tag.font.size = Pt(11)
    p_tag.font.bold = True
    p_tag.font.color.rgb = ACCENT_AMBER
    
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.85), Inches(11.7), Inches(0.8))
    tf = title_box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

def build_deck(filename, deck_title, deck_category, slides_data):
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]
    
    # Title Slide
    title_slide = prs.slides.add_slide(blank_layout)
    set_slide_background(title_slide)
    add_header(title_slide, deck_title, deck_category)
    
    for sdata in slides_data:
        slide = prs.slides.add_slide(blank_layout)
        set_slide_background(slide)
        add_header(slide, sdata["title"], sdata.get("category", deck_category))
        
        if sdata["type"] == "concept":
            box = slide.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(11.3), Inches(5.0))
            tf = box.text_frame
            tf.word_wrap = True
            for b in sdata["bullets"]:
                p = tf.add_paragraph()
                p.text = b
                p.font.size = Pt(17)
                p.font.color.rgb = TEXT_WHITE
                p.space_after = Pt(12)
        elif sdata["type"] == "question":
            # Question box
            q_box = slide.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(11.3), Inches(2.4))
            tf_q = q_box.text_frame
            tf_q.word_wrap = True
            p_q = tf_q.paragraphs[0]
            p_q.text = sdata["question"]
            p_q.font.size = Pt(16)
            p_q.font.color.rgb = TEXT_WHITE
            
            # Solution Box (Paired for active recall)
            s_box = slide.shapes.add_textbox(Inches(1.0), Inches(4.4), Inches(11.3), Inches(2.6))
            tf_s = s_box.text_frame
            tf_s.word_wrap = True
            p_s = tf_s.paragraphs[0]
            p_s.text = sdata["solution"]
            p_s.font.size = Pt(15)
            p_s.font.color.rgb = ACCENT_GREEN
            
    prs.save(filename)
    print(f"Generated: {filename}")

if __name__ == "__main__":
    print("PowerPoint deck generator initialized.")
    print("Run `python generate_deck1a_pptx.py` or customize to build separate PPTX files.")
