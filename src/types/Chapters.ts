export type Chapters={
    name:string,
    translation:string,
    chapter_number:number
}

export type Chapter={
    
    name:string,
    translation:string,
    summary_en:string,
    summary_hi:string,
    verses_count:number,
    chapter_number:number
}

type slok_type={
    author:string,
    slok?:string
}

export type Slok={
    chapter:number,
    verse:number,
    slok:string,
    transliteration:string,
    tej:slok_type,
    siva:slok_type,
    purohit:slok_type,
    chinmay:slok_type,
    san:slok_type,
    adi:slok_type,
    gambir:slok_type,
    madhav:slok_type,
    anand:slok_type,
    rams:slok_type,
    raman:slok_type,
    abhinav:slok_type,
    sankar:slok_type,
    jaya:slok_type,
    vallabh:slok_type,
    ms:slok_type,
    srid:slok_type,
    dhan:slok_type,
    venkat:slok_type,
    puru:slok_type,
    neel:slok_type,
}