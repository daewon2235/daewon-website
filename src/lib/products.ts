/**
 * 제품군(Product Family) 관련 상수 및 매핑
 * URL 슬러그 ↔ 한글 제품군명 ↔ 페이지 메타 정보를 한 곳에서 관리
 * (설치 사례의 categories.ts와 동일한 구조)
 */

export type ProductFamily = '서가·모빌랙' | '박물관용' | '중량랙' | '맞춤옵션';

// URL 슬러그 → 한글 제품군
export const familyMap: Record<string, ProductFamily> = {
  'mobile-rack': '서가·모빌랙',
  'museum': '박물관용',
  'heavy-rack': '중량랙',
  'option': '맞춤옵션',
};

// 한글 제품군 → URL 슬러그
export const familySlugMap: Record<ProductFamily, string> = {
  '서가·모빌랙': 'mobile-rack',
  '박물관용': 'museum',
  '중량랙': 'heavy-rack',
  '맞춤옵션': 'option',
};

// 제품군 → 영문 라벨 (breadcrumb 표시용)
export const familyEnLabelMap: Record<ProductFamily, string> = {
  '서가·모빌랙': 'Mobile-rack',
  '박물관용': 'Museum Storage',
  '중량랙': 'Heavy-rack',
  '맞춤옵션': 'Custom Option',
};

// 제품군별 페이지 메타정보 (페이지 헤더 카피)
export interface FamilyMeta {
  title: string;
  emTitle: string;
  subtitle: string;
}

export const familyMeta: Record<ProductFamily, FamilyMeta> = {
  '서가·모빌랙': {
    title: '이동식서가',
    emTitle: '모빌랙 시스템',
    subtitle: '공간효율 200%, 보관을 넘어 자산의 가치를 높입니다. 도서관·기록관의 보존서고부터 기업 물류 창고까지, 공간과 용도·예산에 맞는 최적의 이동식 서가 시스템을 제안합니다.',
  },
  '박물관용': {
    title: '전문 수장대',
    emTitle: '시스템',
    subtitle: '수천 년의 가치를 지키는 일. 유물의 재질·크기·무게와 보관환경에 맞춘 1:1 맞춤 설계로, 국가유산과 예술품의 영구보존을 위한 전문 수장 시스템을 제작합니다.',
  },
  '중량랙': {
    title: '중량랙 & 파렛트랙',
    emTitle: '시스템',
    subtitle: '선반당 200kg부터 1톤 이상까지. 거칠고 혹독한 산업·물류 환경을 위해 설계된 고하중 보관 솔루션. 구조적 안정성을 바탕으로 대형 화물을 안전하고 체계적으로 적재·관리합니다.',
  },
  '맞춤옵션': {
    title: '맞춤 프리미엄',
    emTitle: '옵션',
    subtitle: '정형화된 규격을 넘어, 현장의 특수한 상황과 유물의 특성에 맞춘 맞춤형 부속 시스템. 작업의 편의성과 보존성을 한 단계 더 끌어올리는 특별한 대안을 제안합니다.',
  },
};

// 전체 제품군 목록 (배열, 순서 고정)
export const ALL_FAMILIES: ProductFamily[] = [
  '서가·모빌랙', '박물관용', '중량랙', '맞춤옵션'
];
