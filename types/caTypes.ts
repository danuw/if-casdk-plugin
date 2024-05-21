export interface GetBestCarbonRatingParams {
  baseUrl: string;
  location: string[];
  start: Date;
  end: Date;
}

export interface GetCarbonRatingParams {
  location: string[];
  start: Date;
  end: Date;
}

export interface GetCarbonRatingResponseParams {
  location: string[];
  start: Date;
  end: Date;
}
