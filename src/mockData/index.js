/*eslint-disable*/

export const newsApiResponse = {
  status: 'OK',
  copyright:
    'Copyright (c) 2018 The New York Times Company. All Rights Reserved.',
  section: 'home',
  last_updated: '2018-02-21T14:27:44-05:00',
  num_results: 48,
  results: [
    {
      section: 'U.S.',
      subsection: 'Politics',
      title: 'How Unwitting Americans Encountered Russian Operatives Online',
      abstract:
        'With imperfect English and tireless posting on Facebook and Twitter, Russian trolls summoned Americans to rallies, praised Donald J. Trump and played on political divisions.',
      url:
        'https://www.nytimes.com/2018/02/18/us/politics/russian-operatives-facebook-twitter.html',
      byline: 'By SCOTT SHANE',
      item_type: 'Article',
      updated_date: '2018-02-19T11:48:49-05:00',
      created_date: '2018-02-18T20:00:16-05:00',
      published_date: '2018-02-18T20:00:16-05:00',
      material_type_facet: '',
      kicker: '',
      des_facet: [
        'Russian Interference in 2016 US Elections and Ties to Trump Associates',
        'Presidential Election of 2016',
        'Cyberwarfare and Defense',
        'Social Media',
        'United States Politics and Government'
      ],
      org_facet: ['Facebook Inc', 'Twitter'],
      per_facet: ['Trump, Donald J', 'Mueller, Robert S III'],
      geo_facet: ['Russia'],
      multimedia: [],
      short_url: 'https://nyti.ms/2C5LodP'
    },
    {
      section: 'Magazine',
      subsection: '',
      title: 'The Case Against Google',
      abstract:
        'Critics say the search giant is squelching competition before it begins. Should the government step in?',
      url:
        'https://www.nytimes.com/2018/02/20/magazine/the-case-against-google.html',
      byline: 'By CHARLES DUHIGG',
      item_type: 'Article',
      updated_date: '2018-02-20T05:00:01-05:00',
      created_date: '2018-02-20T05:00:11-05:00',
      published_date: '2018-02-20T05:00:11-05:00',
      material_type_facet: '',
      kicker: '',
      des_facet: [
        'Search Engines',
        'Antitrust Laws and Competition Issues',
        'Computers and the Internet',
        'Online Advertising',
        'Suits and Litigation (Civil)'
      ],
      org_facet: [
        'Google Inc',
        'Federal Trade Commission',
        'European Commission',
        'Microsoft Corp',
        'Standard Oil Co'
      ],
      per_facet: [],
      geo_facet: [],
      multimedia: [
        {
          url:
            'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-thumbStandard.png',
          format: 'Standard Thumbnail',
          height: 75,
          width: 75,
          type: 'image',
          subtype: 'photo',
          caption: 'its a photograph',
          copyright: ''
        },
        {
          url:
            'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-thumbLarge.png',
          format: 'thumbLarge',
          height: 150,
          width: 150,
          type: 'image',
          subtype: 'photo',
          caption: 'its a photograph',
          copyright: ''
        },
        {
          url:
            'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-articleInline.png',
          format: 'Normal',
          height: 235,
          width: 190,
          type: 'image',
          subtype: 'photo',
          caption: 'its a photograph',
          copyright: 'its a photograph'
        },
        {
          url:
            'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-mediumThreeByTwo210.png',
          format: 'mediumThreeByTwo210',
          height: 140,
          width: 210,
          type: 'image',
          subtype: 'photo',
          caption: 'its a photograph',
          copyright: 'its a photograph'
        },
        {
          url:
            'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-superJumbo.png',
          format: 'superJumbo',
          height: 2048,
          width: 1658,
          type: 'image',
          subtype: 'photo',
          caption: 'its a photograph',
          copyright: 'its a photograph'
        }
      ],
      short_url: 'https://nyti.ms/2C7Sb6Y'
    }
  ]
};

export const expectedNewsObj = [
  {
    title: 'How Unwitting Americans Encountered Russian Operatives Online',
    abstract:
      'With imperfect English and tireless posting on Facebook and Twitter, Russian trolls summoned Americans to rallies, praised Donald J. Trump and played on political divisions.',
    byline: 'By SCOTT SHANE',
    thumbnail: 'https://avatars1.githubusercontent.com/u/221409?s=200&v=4',
    url:
      'https://www.nytimes.com/2018/02/18/us/politics/russian-operatives-facebook-twitter.html',
    caption: 'New York Times'
  },
  {
    title: 'The Case Against Google',
    abstract:
      'Critics say the search giant is squelching competition before it begins. Should the government step in?',
    url:
      'https://www.nytimes.com/2018/02/20/magazine/the-case-against-google.html',
    byline: 'By CHARLES DUHIGG',
    thumbnail:
      'https://static01.nyt.com/images/2018/02/25/magazine/25mag-google4-cov/25mag-google4-cov-articleInline.png',
    caption: 'its a photograph'
  }
];

export const weatherApiResponse = {
  response: {
    version: '0.1',
    termsofService: 'http://www.wunderground.com/weather/api/d/terms.html',
    features: {
      conditions: 1,
      hourly: 1
    }
  },
  current_observation: {
    image: {
      url: 'http://icons.wxug.com/graphics/wu2/logo_130x80.png',
      title: 'Weather Underground',
      link: 'http://www.wunderground.com'
    },
    display_location: {
      full: 'Denver, CO',
      city: 'Denver',
      state: 'CO',
      state_name: 'Colorado',
      country: 'US',
      country_iso3166: 'US',
      zip: '80201',
      magic: '1',
      wmo: '99999',
      latitude: '39.74000168',
      longitude: '-104.98000336',
      elevation: '1598.1'
    },
    observation_location: {
      full: 'Capitol Hill, Denver, Colorado',
      city: 'Capitol Hill, Denver',
      state: 'Colorado',
      country: 'US',
      country_iso3166: 'US',
      latitude: '39.734711',
      longitude: '-104.977921',
      elevation: '5331 ft'
    },
    estimated: {},
    station_id: 'KCODENVE218',
    observation_time: 'Last Updated on February 20, 10:06 AM MST',
    observation_time_rfc822: 'Tue, 20 Feb 2018 10:06:55 -0700',
    observation_epoch: '1519146415',
    local_time_rfc822: 'Tue, 20 Feb 2018 10:07:00 -0700',
    local_epoch: '1519146420',
    local_tz_short: 'MST',
    local_tz_long: 'America/Denver',
    local_tz_offset: '-0700',
    weather: 'Mostly Cloudy',
    temperature_string: '11.8 F (-11.2 C)',
    temp_f: 11.8,
    temp_c: -11.2,
    relative_humidity: '47%',
    wind_string: 'Calm',
    wind_dir: 'SSE',
    wind_degrees: 164,
    wind_mph: 0.0,
    wind_gust_mph: 0,
    wind_kph: 0,
    wind_gust_kph: 0,
    pressure_mb: '1022',
    pressure_in: '30.17',
    pressure_trend: '-',
    dewpoint_string: '-4 F (-20 C)',
    dewpoint_f: -4,
    dewpoint_c: -20,
    heat_index_string: 'NA',
    heat_index_f: 'NA',
    heat_index_c: 'NA',
    windchill_string: '12 F (-11 C)',
    windchill_f: '12',
    windchill_c: '-11',
    feelslike_string: '12 F (-11 C)',
    feelslike_f: '12',
    feelslike_c: '-11',
    visibility_mi: '10.0',
    visibility_km: '16.1',
    solarradiation: '71',
    UV: '1.0',
    precip_1hr_string: '0.00 in ( 0 mm)',
    precip_1hr_in: '0.00',
    precip_1hr_metric: ' 0',
    precip_today_string: '0.00 in (0 mm)',
    precip_today_in: '0.00',
    precip_today_metric: '0',
    icon: 'mostlycloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
    forecast_url: 'http://www.wunderground.com/US/CO/Denver.html',
    history_url:
      'http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218',
    ob_url:
      'http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921',
    nowcast: ''
  },
  hourly_forecast: [
    {
      FCTTIME: {
        hour: '11',
        hour_padded: '11',
        min: '00',
        min_unpadded: '0',
        sec: '0',
        year: '2018',
        mon: '2',
        mon_padded: '02',
        mon_abbrev: 'Feb',
        mday: '20',
        mday_padded: '20',
        yday: '50',
        isdst: '0',
        epoch: '1519149600',
        pretty: '11:00 AM MST on February 20, 2018',
        civil: '11:00 AM',
        month_name: 'February',
        month_name_abbrev: 'Feb',
        weekday_name: 'Tuesday',
        weekday_name_night: 'Tuesday Night',
        weekday_name_abbrev: 'Tue',
        weekday_name_unlang: 'Tuesday',
        weekday_name_night_unlang: 'Tuesday Night',
        ampm: 'AM',
        tz: '',
        age: '',
        UTCDATE: ''
      },
      temp: {
        english: '13',
        metric: '-11'
      },
      dewpoint: {
        english: '1',
        metric: '-17'
      },
      condition: 'Overcast',
      icon: 'cloudy',
      icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      fctcode: '4',
      sky: '82',
      wspd: {
        english: '7',
        metric: '11'
      },
      wdir: {
        dir: 'ENE',
        degrees: '64'
      },
      wx: 'Cloudy',
      uvi: '2',
      humidity: '58',
      windchill: {
        english: '2',
        metric: '-17'
      },
      heatindex: {
        english: '-9999',
        metric: '-9999'
      },
      feelslike: {
        english: '2',
        metric: '-17'
      },
      qpf: {
        english: '0.0',
        metric: '0'
      },
      snow: {
        english: '0.0',
        metric: '0'
      },
      pop: '15',
      mslp: {
        english: '30.23',
        metric: '1024'
      }
    },
    {
      FCTTIME: {
        hour: '12',
        hour_padded: '12',
        min: '00',
        min_unpadded: '0',
        sec: '0',
        year: '2018',
        mon: '2',
        mon_padded: '02',
        mon_abbrev: 'Feb',
        mday: '20',
        mday_padded: '20',
        yday: '50',
        isdst: '0',
        epoch: '1519153200',
        pretty: '12:00 PM MST on February 20, 2018',
        civil: '12:00 PM',
        month_name: 'February',
        month_name_abbrev: 'Feb',
        weekday_name: 'Tuesday',
        weekday_name_night: 'Tuesday Night',
        weekday_name_abbrev: 'Tue',
        weekday_name_unlang: 'Tuesday',
        weekday_name_night_unlang: 'Tuesday Night',
        ampm: 'PM',
        tz: '',
        age: '',
        UTCDATE: ''
      },
      temp: {
        english: '15',
        metric: '-9'
      },
      dewpoint: {
        english: '2',
        metric: '-17'
      },
      condition: 'Overcast',
      icon: 'cloudy',
      icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      fctcode: '4',
      sky: '86',
      wspd: {
        english: '8',
        metric: '13'
      },
      wdir: {
        dir: 'NE',
        degrees: '54'
      },
      wx: 'Cloudy',
      uvi: '2',
      humidity: '56',
      windchill: {
        english: '5',
        metric: '-15'
      },
      heatindex: {
        english: '-9999',
        metric: '-9999'
      },
      feelslike: {
        english: '5',
        metric: '-15'
      },
      qpf: {
        english: '0.0',
        metric: '0'
      },
      snow: {
        english: '0.0',
        metric: '0'
      },
      pop: '15',
      mslp: {
        english: '30.21',
        metric: '1023'
      }
    },
    {
      FCTTIME: {
        hour: '13',
        hour_padded: '13',
        min: '00',
        min_unpadded: '0',
        sec: '0',
        year: '2018',
        mon: '2',
        mon_padded: '02',
        mon_abbrev: 'Feb',
        mday: '20',
        mday_padded: '20',
        yday: '50',
        isdst: '0',
        epoch: '1519156800',
        pretty: '1:00 PM MST on February 20, 2018',
        civil: '1:00 PM',
        month_name: 'February',
        month_name_abbrev: 'Feb',
        weekday_name: 'Tuesday',
        weekday_name_night: 'Tuesday Night',
        weekday_name_abbrev: 'Tue',
        weekday_name_unlang: 'Tuesday',
        weekday_name_night_unlang: 'Tuesday Night',
        ampm: 'PM',
        tz: '',
        age: '',
        UTCDATE: ''
      },
      temp: {
        english: '17',
        metric: '-8'
      },
      dewpoint: {
        english: '4',
        metric: '-16'
      },
      condition: 'Overcast',
      icon: 'cloudy',
      icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      fctcode: '4',
      sky: '88',
      wspd: {
        english: '8',
        metric: '13'
      },
      wdir: {
        dir: 'NE',
        degrees: '44'
      },
      wx: 'Cloudy',
      uvi: '1',
      humidity: '55',
      windchill: {
        english: '7',
        metric: '-14'
      },
      heatindex: {
        english: '-9999',
        metric: '-9999'
      },
      feelslike: {
        english: '7',
        metric: '-14'
      },
      qpf: {
        english: '0.0',
        metric: '0'
      },
      snow: {
        english: '0.0',
        metric: '0'
      },
      pop: '15',
      mslp: {
        english: '30.17',
        metric: '1022'
      }
    }
  ]
};

export const expectedWeatherObj = {
  currentObservation: {
    conditions: 'Mostly Cloudy',
    currentTime: 'Last Updated on February 20, 10:06 AM MST',
    icon: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
    location: 'Capitol Hill, Denver',
    temp: 11.8
  },
  hourlyForecast: [
    {
      hour: '11:00 AM',
      icon: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      pop: '15',
      temp: '13'
    },
    {
      hour: '12:00 PM',
      icon: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      pop: '15',
      temp: '15'
    },
    {
      hour: '1:00 PM',
      icon: 'http://icons.wxug.com/i/c/k/cloudy.gif',
      pop: '15',
      temp: '17'
    }
  ]
};
