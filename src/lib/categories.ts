/**
 * 카테고리 관련 상수 및 매핑
 * URL 슬러그 ↔ 한글 카테고리명 ↔ 페이지 메타 정보를 한 곳에서 관리
 */

export type Category = '박물관' | '도서관' | '교육기관' | '공공기관' | '창고·물류';

// URL 슬러그 → 한글 카테고리
export const categoryMap: Record<string, Category> = {
  'museum': '박물관',
  'library': '도서관',
  'education': '교육기관',
  'public': '공공기관',
  'warehouse': '창고·물류',
};

// 한글 카테고리 → URL 슬러그
export const slugMap: Record<Category, string> = {
  '박물관': 'museum',
  '도서관': 'library',
  '교육기관': 'education',
  '공공기관': 'public',
  '창고·물류': 'warehouse',
};

// 카테고리 → 영문 라벨 (breadcrumb 표시용)
export const enLabelMap: Record<Category, string> = {
  '박물관': 'Museum',
  '도서관': 'Library',
  '교육기관': 'Education',
  '공공기관': 'Public',
  '창고·물류': 'Warehouse',
};

// 카테고리별 페이지 메타정보 (페이지 헤더 카피)
export interface CategoryMeta {
  title: string;
  emTitle: string;
  subtitle: string;
}

export const categoryMeta: Record<Category, CategoryMeta> = {
  '박물관': {
    title: '박물관',
    emTitle: '설치 사례',
    subtitle: '유물의 하중과 특성을 고려한 1:1 맞춤 설계. 정밀 구동 기술과 보이는 수장고 대응 마감까지. 대원모빌랙이 함께한 박물관 수장 환경을 소개합니다.',
  },
  '도서관': {
    title: '도서관',
    emTitle: '설치 사례',
    subtitle: '도서 관리의 효율을 극대화하는 이동식 서가 시스템. 공공도서관·대학도서관·기록관까지 다양한 환경에 맞춤 설계된 사례를 소개합니다.',
  },
  '교육기관': {
    title: '교육기관',
    emTitle: '설치 사례',
    subtitle: '학교·연구소·교육원의 자료 관리와 공간 효율을 동시에 실현하는 수납 시스템 사례.',
  },
  '공공기관': {
    title: '공공기관',
    emTitle: '설치 사례',
    subtitle: '관공서·기록물보존소·공공시설의 체계적인 기록물 관리를 위한 모빌랙 시스템 설치 사례.',
  },
  '창고·물류': {
    title: '창고·물류',
    emTitle: '설치 사례',
    subtitle: '대규모 보관·물류 환경의 공간 효율을 극대화하는 중량랙·파렛트랙 설치 사례.',
  },
};

// 전체 카테고리 목록 (배열, 순서 고정)
export const ALL_CATEGORIES: Category[] = [
  '박물관', '도서관', '교육기관', '공공기관', '창고·물류'
];
