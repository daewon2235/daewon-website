import { defineCollection, z } from 'astro:content';

/**
 * 설치 사례(Cases) 컬렉션 스키마
 * 
 * 이 스키마는 Decap CMS의 입력 폼과 1:1로 매칭됩니다.
 * 직원이 관리자 페이지에서 입력한 값이 여기 정의된 구조대로 마크다운 파일로 저장됩니다.
 */
const cases = defineCollection({
  type: 'content',
  schema: z.object({
    // ─── 기본 정보 ───
    title: z.string(),                          // 박물관 이름 (필수)
    subtitle: z.string(),                       // 한 줄 요약 (필수)
    
    // ─── 카테고리 (다중 선택 가능) ───
    categories: z.array(
      z.enum(['박물관', '도서관', '교육기관', '공공기관', '창고·물류'])
    ).min(1).max(5),
    
    // ─── 메타 정보 ───
    client: z.string(),                         // 발주처
    location: z.string(),                       // 위치
    year: z.number().int().min(1986).max(2100), // 준공 연도
    scope_summary: z.string(),                  // 설치 범위 (요약, 4컬럼 표시용)
    
    // ─── 대표 이미지 ───
    hero_image: z.string(),                     // 외관/대표 사진 경로
    hero_image_alt: z.string().default(''),     // 접근성용 대체 텍스트
    
    // ─── 인용구 (선택) ───
    quote: z.string().optional(),
    
    // ─── 프로젝트 사양 (key-value 반복) ───
    specs: z.array(z.object({
      key: z.string(),
      value: z.string(),
    })).default([]),
    
    // ─── Key Features (최대 3개 권장) ───
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).max(6).default([]),
    
    // ─── Gallery (이미지 + 라벨 + 캡션) ───
    gallery: z.array(z.object({
      image: z.string(),
      label: z.string(),
      caption: z.string(),
    })).default([]),
    
    // ─── Scope of Work (납품 범위 항목) ───
    scope_items: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).default([]),
    
    // ─── 발행 설정 ───
    published: z.boolean().default(true),       // 발행 여부
    published_date: z.date(),                   // 발행일
    case_number: z.number().int().positive().optional(), // 표시용 사례 번호
    
    // ─── SEO (선택) ───
    seo_description: z.string().optional(),
  }),
});

export const collections = { cases };
