import { z } from 'zod';

export const RatSightingSchema = z
  .object({
    /**
     * Unique identifier of a Service Request (SR) in the open data set
     */
    unique_key: z.coerce.number(),

    /**
     * Date SR was created
     */
    created_date: z.coerce.date(),

    /**
     * Date SR was closed by responding agency
     */
    closed_date: z.coerce.date().optional(),

    /**
     * Acronym of responding City Government Agency
     */
    agency: z.enum(['DOHMH']),

    /**
     * Full Agency name of responding City Government Agency
     */
    agency_name: z.enum(['Department of Health and Mental Hygiene']),

    /**
     * This is the first level of a hierarchy identifying the topic of the
     * incident or condition. Complaint Type may have a corresponding
     * Descriptor (below) or may stand alone.
     */
    complaint_type: z.enum(['Rodent']),

    /**
     * This is associated to the Complaint Type, and provides further detail
     * on the incident or condition. Descriptor values are dependent on the
     * Complaint Type, and are not always required in SR.
     */
    descriptor: z.enum(['Rat Sighting']),

    /**
     * Describes the type of location used in the address information
     */
    location_type: z.string().optional(),

    /**
     * Incident location zip code, provided by geo validation.
     */
    //? Handle extremely rare edge case, where the string 'N/A' is returned
    incident_zip: z.preprocess(
      (val) => (val === 'N/A' ? undefined : val),
      z.coerce.number().optional()
    ),

    /**
     * House number of incident address provided by submitter.
     */
    incident_address: z.string().optional(),

    /**
     * Street name of incident address provided by the submitter
     */
    street_name: z.string().optional(),

    /**
     * First Cross street based on the geo validated incident location
     */
    cross_street_1: z.string().optional(),

    /**
     * Second Cross Street based on the geo validated incident location
     */
    cross_street_2: z.string().optional(),

    /**
     * First intersecting street based on geo validated incident location
     */
    intersection_street_1: z.string().optional(),

    /**
     * Second intersecting street based on geo validated incident location
     */
    intersection_street_2: z.string().optional(),

    /**
     * Type of incident location information available.
     */
    address_type: z
      .enum([
        'ADDRESS',
        'BLOCKFACE',
        'INTERSECTION',
        'LATLONG',
        'PLACENAME',
        'UNRECOGNIZED',
      ])
      .optional(),

    /**
     * City of the incident location provided by geovalidation.
     */
    city: z.string().optional(),

    /**
     * If the incident location is identified as a Landmark the name of the
     * landmark will display here
     */
    landmark: z.string().optional(),

    /**
     * If available, this field describes the type of city facility
     * associated to the SR
     */
    facility_type: z.string().optional(),

    /**
     * Status of SR submitted
     */
    status: z.enum([
      'Assigned',
      'Closed',
      'Draft',
      'In Progress',
      'Open',
      'Pending',
      'Unspecified',
    ]),

    /**
     * Date when responding agency is expected to update the SR. This is
     * based on the Complaint Type and internal Service Level Agreements
     * (SLAs).
     */
    due_date: z.coerce.date().optional(),

    /**
     * Date when responding agency last updated the SR.
     */
    resolution_action_updated_date: z.coerce.date().optional(),

    /**
     * Provided by geovalidation.
     */
    community_board: z.string().optional(),

    /**
     * Provided by the submitter and confirmed by geovalidation.
     */
    borough: z
      .enum([
        'BRONX',
        'BROOKLYN',
        'MANHATTAN',
        'QUEENS',
        'STATEN ISLAND',
        'Unspecified',
      ])
      .optional(),

    /**
     * Geo validated, X coordinate of the incident location.
     */
    x_coordinate_state_plane: z.coerce.number().optional(),

    /**
     * Geo validated, Y coordinate of the incident location.
     */
    y_coordinate_state_plane: z.coerce.number().optional(),

    /**
     * If the incident location is a Parks Dept facility, the Name of the
     * facility will appear here
     */
    park_facility_name: z.string(),

    /**
     * The borough of incident if it is a Parks Dept facility
     */
    park_borough: z
      .enum([
        'BRONX',
        'BROOKLYN',
        'MANHATTAN',
        'QUEENS',
        'STATEN ISLAND',
        'Unspecified',
        '',
      ])
      .optional(),

    /**
     * If the incident is a taxi, this field describes the type of TLC
     * vehicle.
     */
    vehicle_type: z.string().optional(),

    /**
     * If the incident is identified as a taxi, this field will display the
     * borough of the taxi company.
     */
    taxi_company_borough: z.string().optional(),

    /**
     * If the incident is identified as a taxi, this field displays the taxi
     * pick up location
     */
    taxi_pick_up_location: z.string().optional(),

    /**
     * If the incident is identified as a Bridge/Highway, the name will be
     * displayed here.
     */
    bridge_highway_name: z.string().optional(),

    /**
     * If the incident is identified as a Bridge/Highway, the direction where
     * the issue took place would be displayed here.
     */
    bridge_highway_direction: z.string().optional(),

    /**
     * If the incident location was Bridge/Highway this column differentiates
     * if the issue was on the Road or the Ramp.
     */
    road_ramp: z.string().optional(),

    /**
     * Additional information on the section of the Bridge/Highway were the
     * incident took place.
     */
    bridge_highway_segment: z.string().optional(),

    /**
     * Geo based Lat of the incident location
     */
    latitude: z.coerce.number().optional(),

    /**
     * Geo based Long of the incident location
     */
    longitude: z.coerce.number().optional(),

    /**
     * Combination of the geo based lat & long of the incident location
     */
    location: z
      .object({
        coordinates: z.tuple([z.number(), z.number()]),
        type: z.literal('Point'),
      })
      .strict()
      .optional(),

    // Unknown Keys - keys that are not in the docs but are in the data
    x_coordinate_state_plane_: z.coerce.number().optional(),
    y_coordinate_state_plane_: z.coerce.number().optional(),
    ':@computed_region_efsh_h5xi': z.coerce.number().optional(),
    ':@computed_region_f5dn_yrer': z.coerce.number().optional(),
    ':@computed_region_yeji_bk3q': z.coerce.number().optional(),
    ':@computed_region_92fq_4b7q': z.coerce.number().optional(),
    ':@computed_region_sbqj_enih': z.coerce.number().optional(),
  })
  .strict();

export type RatSighting = z.infer<typeof RatSightingSchema>;

export const RatSightingsSchema = z.array(RatSightingSchema);
