import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_layout_additional_details';
  info: {
    displayName: 'Additional Details';
  };
  attributes: {
    blood_group: Schema.Attribute.String;
    current_address: Schema.Attribute.Text;
    date_of_birth: Schema.Attribute.Date;
    date_of_marriage: Schema.Attribute.Date;
    higher_education: Schema.Attribute.String;
  };
}

export interface LayoutBiographicalDetails extends Struct.ComponentSchema {
  collectionName: 'components_layout_biographical_details';
  info: {
    description: '';
    displayName: 'Biographical Details';
  };
  attributes: {
    Aakna: Schema.Attribute.Enumeration<
      [
        'Amaroha',
        'Bageriya',
        'Baraha',
        'Chauda',
        'Bajrang Gadiya',
        'Chandaiya',
        'Dengare',
        'Ghura',
        'Jhudele',
        'Khangat',
        'Kharda',
        'Kudariya',
        'Naina',
        'Pachanone',
        'Barele',
        'Chapara',
        'Geda',
        'Mihi ke kunvar',
        'Nisunge',
        'Nogaraiya',
        'Nolyeha',
        'Rawat',
        'Andhi',
        'Baderiya',
        'Bamoriya',
        'Bardiya',
        'Bed',
        'Bhagoriya',
        'Bijpuriya',
        'Bilaiya',
        'Chiroliya',
        'Chungele',
        'Kathal',
        'Lahariya',
        'Nagariya',
        'Rikholya',
        'Seth',
        'Sipolya',
        'Sirojiya',
        'Amoriya',
        'Bhondiya',
        'Damele',
        'Dhusar',
        'Katare',
        'Piparseniya',
        'Aasu',
        'AasuDeepa',
        'Bedar',
        'Deepa',
        'Khantal',
        'Sudipa',
        'Badonya',
        'Binoriya',
        'Dadraya',
        'Ikasade',
        'Indurakhya',
        'Kanjolya',
        'Kastawar',
        'Kharaya',
        'Kurele',
        'Misuriya',
        'Jhuke',
        'Kandele',
        'Lohiya',
        'Shav',
      ]
    >;
    Gotra: Schema.Attribute.Enumeration<
      [
        'Badal',
        'Bhal',
        'Gagal',
        'Gol',
        'Jaital',
        'Kachil',
        'Kasib',
        'Kochal',
        'Kohil',
      ]
    >;
    Grah: Schema.Attribute.Enumeration<['Devta', 'Manushya', 'Rakshasa']>;
    Handicap: Schema.Attribute.Enumeration<
      ['None', 'Physically', 'Mentally', 'Other']
    >;
    Mama_Aakna: Schema.Attribute.Enumeration<
      [
        'Aasu',
        'Amar',
        'Amolya',
        'Amoriya',
        'Andhi',
        'Baderiya',
        'Badonya',
        'Bajrangdiya',
        'Bedar',
      ]
    >;
    manglik_status: Schema.Attribute.Enumeration<
      ['Manglik', 'Non Manglik', 'Aanshik', 'Other']
    >;
  };
}

export interface LayoutChildDetails extends Struct.ComponentSchema {
  collectionName: 'components_layout_child_details';
  info: {
    displayName: 'Child Details';
  };
  attributes: {
    child_name: Schema.Attribute.String;
  };
}

export interface LayoutFamilyDetails extends Struct.ComponentSchema {
  collectionName: 'components_layout_family_details';
  info: {
    description: '';
    displayName: 'Family Details';
  };
  attributes: {
    father_name: Schema.Attribute.String;
    mother_name: Schema.Attribute.String;
    phone_number: Schema.Attribute.BigInteger;
    spouse_name: Schema.Attribute.String;
  };
}

export interface LayoutPersonalInformation extends Struct.ComponentSchema {
  collectionName: 'components_layout_personal_informations';
  info: {
    description: '';
    displayName: 'Personal Information';
  };
  attributes: {
    display_picture: Schema.Attribute.Media<'images'>;
    email_address: Schema.Attribute.Email & Schema.Attribute.Required;
    full_name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
        minLength: 5;
      }>;
    Gender: Schema.Attribute.Enumeration<['Male', 'Female']> &
      Schema.Attribute.Required;
    mobile_number: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: '10';
        },
        string
      >;
    village: Schema.Attribute.String;
    whatsapp_number: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: '10';
        },
        string
      >;
  };
}

export interface LayoutWorkInformation extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_informations';
  info: {
    displayName: 'Work Information';
  };
  attributes: {
    company_name: Schema.Attribute.String;
    occupation: Schema.Attribute.String;
    work_area: Schema.Attribute.String;
  };
}

export interface LayoutYourSuggestion extends Struct.ComponentSchema {
  collectionName: 'components_layout_your_suggestions';
  info: {
    displayName: 'Your Suggestion';
  };
  attributes: {
    date: Schema.Attribute.Date;
    suggestions: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.additional-details': LayoutAdditionalDetails;
      'layout.biographical-details': LayoutBiographicalDetails;
      'layout.child-details': LayoutChildDetails;
      'layout.family-details': LayoutFamilyDetails;
      'layout.personal-information': LayoutPersonalInformation;
      'layout.work-information': LayoutWorkInformation;
      'layout.your-suggestion': LayoutYourSuggestion;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
