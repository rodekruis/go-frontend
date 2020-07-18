const multiValueDelimiter = ', ';
const exportHeaders = [
  {
    title: 'Country',
    key: 'project_country',
    modifier: r => r.project_country_detail.name,
  },
  {
    title: 'Region',
    key: 'project_district',
    modifier: r => (r.project_districts_detail || []).map(d => d.name).join(multiValueDelimiter),
  },
  {
    title: 'Province',
    key: 'where_province_display',
  },
  {
    title: 'District',
    key: 'where_district_display',
  },
  {
    title: 'Municipality',
    key: 'where_municipality_display',
  },
  {
    title: 'Ward',
    key: 'where_ward',
  },
  {
    title: 'Reporting NS',
    key: 'reporting_ns',
    modifier: r => r.reporting_ns_detail ? r.reporting_ns_detail.name : '',
  },
  {
    title: 'Organizational Unit',
    key: 'organizational_unit_display',
  },
  {
    title: 'Partner',
    key: 'partner',
  },
  {
    title: 'Activity',
    key: 'activity',
  },
  {
    title: 'Subactivity',
    key: 'subactivity',
  },
  {
    title: 'Operation Type',
    key: 'operation_type_display',
  },
  {
    title: 'Programme Type',
    key: 'programme_type_display',
  },
  {
    title: 'Disaster Type',
    key: 'dtype_detail',
    modifier: r => r.dtype_detail ? r.dtype_detail.name : '',
  },
  {
    title: 'Project Name',
    key: 'name',
  },
  {
    title: 'Primary Sector',
    key: 'primary_sector_display',
  },
  {
    title: 'Tags',
    key: 'secondary_sectors',
    modifier: r => r.secondary_sectors_display.join(multiValueDelimiter),
  },
  {
    title: 'Start Date',
    key: 'start_date',
  },
  {
    title: 'End Date',
    key: 'end_date',
  },
  {
    title: 'Budget(CHF)',
    key: 'budget_amount',
  },
  {
    title: 'Measurement Metric',
    key: 'units_measurement_metric_display',
  },
  {
    title: 'Quantity',
    key: 'units_quantity',
  },
  {
    title: 'Beneficiary Type',
    key: 'beneficiary_type',
  },
  {
    title: 'Status',
    key: 'status_display',
  },
  {
    title: 'Delivery Place',
    key: 'where_delivery_service_place',
  },
  {
    title: 'Delivery Service Name',
    key: 'where_delivery_service_name',
  },
  {
    title: 'Targeted Males',
    key: 'target_male',
  },
  {
    title: 'Targeted Females',
    key: 'target_female',
  },
  {
    title: 'Targeted LGBTIQ',
    key: 'target_lgbtiq',
  },
  {
    title: 'Targeted Others',
    key: 'target_other',
  },
  {
    title: 'Targeted Total',
    key: 'target_total',
  },
  {
    title: 'Targeted Pregnant Women',
    key: 'target_pregnant_women',
  },
  {
    title: 'Target People with Disability',
    key: 'target_people_with_disability',
  },
  {
    title: 'Reached Males',
    key: 'reached_male',
  },
  {
    title: 'Reached Females',
    key: 'reached_female',
  },
  {
    title: 'Reached LGBTIQ',
    key: 'reached_lgbtiq',
  },
  {
    title: 'Reached Others',
    key: 'reached_other',
  },
  {
    title: 'Reached Total',
    key: 'reached_total',
  },
  {
    title: 'Reached Pregnant Women',
    key: 'reached_pregnant_women',
  },
  {
    title: 'Reached People with Disability',
    key: 'reached_people_with_disability',
  },
];

export default exportHeaders;
