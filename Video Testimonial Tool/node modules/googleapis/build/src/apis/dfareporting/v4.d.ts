/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace dfareporting_v4 {
    export interface Options extends GlobalOptions {
        version: 'v4';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Campaign Manager 360 API
     *
     * Build applications to efficiently manage large or complex trafficking, reporting, and attribution workflows for Campaign Manager 360.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const dfareporting = google.dfareporting('v4');
     * ```
     */
    export class Dfareporting {
        context: APIRequestContext;
        accountActiveAdSummaries: Resource$Accountactiveadsummaries;
        accountPermissionGroups: Resource$Accountpermissiongroups;
        accountPermissions: Resource$Accountpermissions;
        accounts: Resource$Accounts;
        accountUserProfiles: Resource$Accountuserprofiles;
        ads: Resource$Ads;
        advertiserGroups: Resource$Advertisergroups;
        advertiserInvoices: Resource$Advertiserinvoices;
        advertiserLandingPages: Resource$Advertiserlandingpages;
        advertisers: Resource$Advertisers;
        billingAssignments: Resource$Billingassignments;
        billingProfiles: Resource$Billingprofiles;
        billingRates: Resource$Billingrates;
        browsers: Resource$Browsers;
        campaignCreativeAssociations: Resource$Campaigncreativeassociations;
        campaigns: Resource$Campaigns;
        changeLogs: Resource$Changelogs;
        cities: Resource$Cities;
        connectionTypes: Resource$Connectiontypes;
        contentCategories: Resource$Contentcategories;
        conversions: Resource$Conversions;
        countries: Resource$Countries;
        creativeAssets: Resource$Creativeassets;
        creativeFields: Resource$Creativefields;
        creativeFieldValues: Resource$Creativefieldvalues;
        creativeGroups: Resource$Creativegroups;
        creatives: Resource$Creatives;
        dimensionValues: Resource$Dimensionvalues;
        directorySites: Resource$Directorysites;
        dynamicTargetingKeys: Resource$Dynamictargetingkeys;
        eventTags: Resource$Eventtags;
        files: Resource$Files;
        floodlightActivities: Resource$Floodlightactivities;
        floodlightActivityGroups: Resource$Floodlightactivitygroups;
        floodlightConfigurations: Resource$Floodlightconfigurations;
        inventoryItems: Resource$Inventoryitems;
        languages: Resource$Languages;
        metros: Resource$Metros;
        mobileApps: Resource$Mobileapps;
        mobileCarriers: Resource$Mobilecarriers;
        operatingSystems: Resource$Operatingsystems;
        operatingSystemVersions: Resource$Operatingsystemversions;
        orders: Resource$Orders;
        placementGroups: Resource$Placementgroups;
        placements: Resource$Placements;
        placementStrategies: Resource$Placementstrategies;
        platformTypes: Resource$Platformtypes;
        postalCodes: Resource$Postalcodes;
        projects: Resource$Projects;
        regions: Resource$Regions;
        remarketingLists: Resource$Remarketinglists;
        remarketingListShares: Resource$Remarketinglistshares;
        reports: Resource$Reports;
        sites: Resource$Sites;
        sizes: Resource$Sizes;
        subaccounts: Resource$Subaccounts;
        targetableRemarketingLists: Resource$Targetableremarketinglists;
        targetingTemplates: Resource$Targetingtemplates;
        userProfiles: Resource$Userprofiles;
        userRolePermissionGroups: Resource$Userrolepermissiongroups;
        userRolePermissions: Resource$Userrolepermissions;
        userRoles: Resource$Userroles;
        videoFormats: Resource$Videoformats;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Contains properties of a Campaign Manager account.
     */
    export interface Schema$Account {
        /**
         * Account permissions assigned to this account.
         */
        accountPermissionIds?: string[] | null;
        /**
         * Profile for this account. This is a read-only field that can be left blank.
         */
        accountProfile?: string | null;
        /**
         * Whether this account is active.
         */
        active?: boolean | null;
        /**
         * Maximum number of active ads allowed for this account.
         */
        activeAdsLimitTier?: string | null;
        /**
         * Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
         */
        activeViewOptOut?: boolean | null;
        /**
         * User role permissions available to the user roles of this account.
         */
        availablePermissionIds?: string[] | null;
        /**
         * ID of the country associated with this account.
         */
        countryId?: string | null;
        /**
         * ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP
         */
        currencyId?: string | null;
        /**
         * Default placement dimensions for this account.
         */
        defaultCreativeSizeId?: string | null;
        /**
         * Description of this account.
         */
        description?: string | null;
        /**
         * ID of this account. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
         */
        kind?: string | null;
        /**
         * Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional)
         */
        locale?: string | null;
        /**
         * Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
         */
        maximumImageSize?: string | null;
        /**
         * Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
         */
        name?: string | null;
        /**
         * Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
         */
        nielsenOcrEnabled?: boolean | null;
        /**
         * Reporting configuration of this account.
         */
        reportsConfiguration?: Schema$ReportsConfiguration;
        /**
         * Share Path to Conversion reports with Twitter.
         */
        shareReportsWithTwitter?: boolean | null;
        /**
         * File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.
         */
        teaserSizeLimit?: string | null;
    }
    /**
     * Gets a summary of active ads in an account.
     */
    export interface Schema$AccountActiveAdSummary {
        /**
         * ID of the account.
         */
        accountId?: string | null;
        /**
         * Ads that have been activated for the account
         */
        activeAds?: string | null;
        /**
         * Maximum number of active ads allowed for the account.
         */
        activeAdsLimitTier?: string | null;
        /**
         * Ads that can be activated for the account.
         */
        availableAds?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".
         */
        kind?: string | null;
    }
    /**
     * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
     */
    export interface Schema$AccountPermission {
        /**
         * Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD"
         */
        accountProfiles?: string[] | null;
        /**
         * ID of this account permission.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
         */
        kind?: string | null;
        /**
         * Administrative level required to enable this account permission.
         */
        level?: string | null;
        /**
         * Name of this account permission.
         */
        name?: string | null;
        /**
         * Permission group of this account permission.
         */
        permissionGroupId?: string | null;
    }
    /**
     * AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
     */
    export interface Schema$AccountPermissionGroup {
        /**
         * ID of this account permission group.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
         */
        kind?: string | null;
        /**
         * Name of this account permission group.
         */
        name?: string | null;
    }
    /**
     * Account Permission Group List Response
     */
    export interface Schema$AccountPermissionGroupsListResponse {
        /**
         * Account permission group collection.
         */
        accountPermissionGroups?: Schema$AccountPermissionGroup[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupGroupsListResponse".
         */
        kind?: string | null;
    }
    /**
     * Account Permission List Response
     */
    export interface Schema$AccountPermissionsListResponse {
        /**
         * Account permission collection.
         */
        accountPermissions?: Schema$AccountPermission[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".
         */
        kind?: string | null;
    }
    /**
     * Account List Response
     */
    export interface Schema$AccountsListResponse {
        /**
         * Account collection.
         */
        accounts?: Schema$Account[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
     */
    export interface Schema$AccountUserProfile {
        /**
         * Account ID of the user profile. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
         */
        active?: boolean | null;
        /**
         * Filter that describes which advertisers are visible to the user profile.
         */
        advertiserFilter?: Schema$ObjectFilter;
        /**
         * Filter that describes which campaigns are visible to the user profile.
         */
        campaignFilter?: Schema$ObjectFilter;
        /**
         * Comments for this user profile.
         */
        comments?: string | null;
        /**
         * Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
         */
        email?: string | null;
        /**
         * ID of the user profile. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
         */
        kind?: string | null;
        /**
         * Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional)
         */
        locale?: string | null;
        /**
         * Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<\>"#%,".
         */
        name?: string | null;
        /**
         * Filter that describes which sites are visible to the user profile.
         */
        siteFilter?: Schema$ObjectFilter;
        /**
         * Subaccount ID of the user profile. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Trafficker type of this user profile. This is a read-only field.
         */
        traffickerType?: string | null;
        /**
         * User type of the user profile. This is a read-only field that can be left blank.
         */
        userAccessType?: string | null;
        /**
         * Filter that describes which user roles are visible to the user profile.
         */
        userRoleFilter?: Schema$ObjectFilter;
        /**
         * User role ID of the user profile. This is a required field.
         */
        userRoleId?: string | null;
    }
    /**
     * Account User Profile List Response
     */
    export interface Schema$AccountUserProfilesListResponse {
        /**
         * Account user profile collection.
         */
        accountUserProfiles?: Schema$AccountUserProfile[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents an activity group.
     */
    export interface Schema$Activities {
        /**
         * List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
         */
        filters?: Schema$DimensionValue[];
        /**
         * The kind of resource this is, in this case dfareporting#activities.
         */
        kind?: string | null;
        /**
         * List of names of floodlight activity metrics.
         */
        metricNames?: string[] | null;
    }
    /**
     * Contains properties of a Campaign Manager ad.
     */
    export interface Schema$Ad {
        /**
         * Account ID of this ad. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this ad is active. When true, archived must be false.
         */
        active?: boolean | null;
        /**
         * Advertiser ID of this ad. This is a required field on insertion.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether this ad is archived. When true, active must be false.
         */
        archived?: boolean | null;
        /**
         * Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        audienceSegmentId?: string | null;
        /**
         * Campaign ID of this ad. This is a required field on insertion.
         */
        campaignId?: string | null;
        /**
         * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
         */
        campaignIdDimensionValue?: Schema$DimensionValue;
        /**
         * Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.
         */
        clickThroughUrl?: Schema$ClickThroughUrl;
        /**
         * Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative.
         */
        clickThroughUrlSuffixProperties?: Schema$ClickThroughUrlSuffixProperties;
        /**
         * Comments for this ad.
         */
        comments?: string | null;
        /**
         * Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
         */
        compatibility?: string | null;
        /**
         * Information about the creation of this ad. This is a read-only field.
         */
        createInfo?: Schema$LastModifiedInfo;
        /**
         * Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.
         */
        creativeGroupAssignments?: Schema$CreativeGroupAssignment[];
        /**
         * Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment .
         */
        creativeRotation?: Schema$CreativeRotation;
        /**
         * Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        dayPartTargeting?: Schema$DayPartTargeting;
        /**
         * Default click-through event tag properties for this ad.
         */
        defaultClickThroughEventTagProperties?: Schema$DefaultClickThroughEventTagProperties;
        /**
         * Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.
         */
        deliverySchedule?: Schema$DeliverySchedule;
        /**
         * Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.
         */
        dynamicClickTracker?: boolean | null;
        endTime?: string | null;
        /**
         * Event tag overrides for this ad.
         */
        eventTagOverrides?: Schema$EventTagOverride[];
        /**
         * Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        geoTargeting?: Schema$GeoTargeting;
        /**
         * ID of this ad. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this ad. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        keyValueTargetingExpression?: Schema$KeyValueTargetingExpression;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
         */
        kind?: string | null;
        /**
         * Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        languageTargeting?: Schema$LanguageTargeting;
        /**
         * Information about the most recent modification of this ad. This is a read-only field.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Name of this ad. This is a required field and must be less than 256 characters long.
         */
        name?: string | null;
        /**
         * Placement assignments for this ad.
         */
        placementAssignments?: Schema$PlacementAssignment[];
        /**
         * Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        remarketingListExpression?: Schema$ListTargetingExpression;
        /**
         * Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.
         */
        size?: Schema$Size;
        /**
         * Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
         */
        sslCompliant?: boolean | null;
        /**
         * Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
         */
        sslRequired?: boolean | null;
        startTime?: string | null;
        /**
         * Subaccount ID of this ad. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        targetingTemplateId?: string | null;
        /**
         * Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
         */
        technologyTargeting?: Schema$TechnologyTargeting;
        /**
         * Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
         */
        type?: string | null;
    }
    /**
     * Campaign ad blocking settings.
     */
    export interface Schema$AdBlockingConfiguration {
        /**
         * Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
         */
        enabled?: boolean | null;
    }
    /**
     * Ad List Response
     */
    export interface Schema$AdsListResponse {
        /**
         * Ad collection.
         */
        ads?: Schema$Ad[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Ad Slot
     */
    export interface Schema$AdSlot {
        /**
         * Comment for this ad slot.
         */
        comment?: string | null;
        /**
         * Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
         */
        compatibility?: string | null;
        /**
         * Height of this ad slot.
         */
        height?: string | null;
        /**
         * ID of the placement from an external platform that is linked to this ad slot.
         */
        linkedPlacementId?: string | null;
        /**
         * Name of this ad slot.
         */
        name?: string | null;
        /**
         * Payment source type of this ad slot.
         */
        paymentSourceType?: string | null;
        /**
         * Primary ad slot of a roadblock inventory item.
         */
        primary?: boolean | null;
        /**
         * Width of this ad slot.
         */
        width?: string | null;
    }
    /**
     * Contains properties of a Campaign Manager advertiser.
     */
    export interface Schema$Advertiser {
        /**
         * Account ID of this advertiser.This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.
         */
        advertiserGroupId?: string | null;
        /**
         * Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
         */
        clickThroughUrlSuffix?: string | null;
        /**
         * ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
         */
        defaultClickThroughEventTagId?: string | null;
        /**
         * Default email address used in sender field for tag emails.
         */
        defaultEmail?: string | null;
        /**
         * Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser.
         */
        floodlightConfigurationId?: string | null;
        /**
         * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
         */
        floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
        /**
         * ID of this advertiser. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
         */
        kind?: string | null;
        /**
         * Measurement partner advertiser link for tag wrapping.
         */
        measurementPartnerLink?: Schema$MeasurementPartnerAdvertiserLink;
        /**
         * Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
         */
        name?: string | null;
        /**
         * Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement.
         */
        originalFloodlightConfigurationId?: string | null;
        /**
         * Status of this advertiser.
         */
        status?: string | null;
        /**
         * Subaccount ID of this advertiser.This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Suspension status of this advertiser.
         */
        suspended?: boolean | null;
    }
    /**
     * Groups advertisers together so that reports can be generated for the entire group at once.
     */
    export interface Schema$AdvertiserGroup {
        /**
         * Account ID of this advertiser group. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * ID of this advertiser group. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
         */
        kind?: string | null;
        /**
         * Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.
         */
        name?: string | null;
    }
    /**
     * Advertiser Group List Response
     */
    export interface Schema$AdvertiserGroupsListResponse {
        /**
         * Advertiser group collection.
         */
        advertiserGroups?: Schema$AdvertiserGroup[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Invoice List Response
     */
    export interface Schema$AdvertiserInvoicesListResponse {
        /**
         * Invoice collection
         */
        invoices?: Schema$Invoice[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Landing Page List Response
     */
    export interface Schema$AdvertiserLandingPagesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse".
         */
        kind?: string | null;
        /**
         * Landing page collection
         */
        landingPages?: Schema$LandingPage[];
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Advertiser List Response
     */
    export interface Schema$AdvertisersListResponse {
        /**
         * Advertiser collection.
         */
        advertisers?: Schema$Advertiser[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Audience Segment.
     */
    export interface Schema$AudienceSegment {
        /**
         * Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
         */
        allocation?: number | null;
        /**
         * ID of this audience segment. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Name of this audience segment. This is a required field and must be less than 65 characters long.
         */
        name?: string | null;
    }
    /**
     * Audience Segment Group.
     */
    export interface Schema$AudienceSegmentGroup {
        /**
         * Audience segments assigned to this group. The number of segments must be between 2 and 100.
         */
        audienceSegments?: Schema$AudienceSegment[];
        /**
         * ID of this audience segment group. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Name of this audience segment group. This is a required field and must be less than 65 characters long.
         */
        name?: string | null;
    }
    /**
     * List account, subaccount, advertiser, and campaign associated with a given Billing Profile.
     */
    export interface Schema$BillingAssignment {
        /**
         * ID of the account associated with the billing assignment.This is a read-only, auto-generated field.
         */
        accountId?: string | null;
        /**
         * ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser
         */
        advertiserId?: string | null;
        /**
         * ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign
         */
        campaignId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment".
         */
        kind?: string | null;
        /**
         * ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field.
         */
        subaccountId?: string | null;
    }
    /**
     * Billing assignment List Response
     */
    export interface Schema$BillingAssignmentsListResponse {
        /**
         * Billing assignments collection.
         */
        billingAssignments?: Schema$BillingAssignment[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse".
         */
        kind?: string | null;
    }
    /**
     * Contains properties of a Campaign Manager Billing Profile.
     */
    export interface Schema$BillingProfile {
        /**
         * Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level.
         */
        consolidatedInvoice?: boolean | null;
        /**
         * Country code of this billing profile.This is a read-only field.
         */
        countryCode?: string | null;
        /**
         * Billing currency code in ISO 4217 format.This is a read-only field.
         */
        currencyCode?: string | null;
        /**
         * ID of this billing profile. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign.
         */
        invoiceLevel?: string | null;
        /**
         * True if the billing profile is the account default profile. This is a read-only field.
         */
        isDefault?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile".
         */
        kind?: string | null;
        /**
         * Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account.
         */
        name?: string | null;
        /**
         * The ID of the payment account the billing profile belongs to. This is a read-only field.
         */
        paymentsAccountId?: string | null;
        /**
         * The ID of the payment customer the billing profile belongs to. This is a read-only field.
         */
        paymentsCustomerId?: string | null;
        /**
         * Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile.
         */
        purchaseOrder?: string | null;
        /**
         * The ID of the secondary payment customer the billing profile belongs to. This is a read-only field.
         */
        secondaryPaymentsCustomerId?: string | null;
        /**
         * Status of this billing profile.This is a read-only field.
         */
        status?: string | null;
    }
    /**
     * Billing profile List Response
     */
    export interface Schema$BillingProfilesListResponse {
        /**
         * Billing profiles collection.
         */
        billingProfiles?: Schema$BillingProfile[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$BillingRate {
        /**
         * Billing currency code in ISO 4217 format.
         */
        currencyCode?: string | null;
        /**
         * End date of this billing rate.
         */
        endDate?: string | null;
        /**
         * ID of this billing rate.
         */
        id?: string | null;
        /**
         * Name of this billing rate. This must be less than 256 characters long.
         */
        name?: string | null;
        /**
         * Flat rate in micros of this billing rate. This cannot co-exist with tiered rate.
         */
        rateInMicros?: string | null;
        /**
         * Start date of this billing rate.
         */
        startDate?: string | null;
        /**
         * Tiered rate of this billing rate. This cannot co-exist with flat rate.
         */
        tieredRates?: Schema$BillingRateTieredRate[];
        /**
         * Type of this billing rate.
         */
        type?: string | null;
        /**
         * Unit of measure for this billing rate.
         */
        unitOfMeasure?: string | null;
    }
    /**
     * Billing Rate List Response
     */
    export interface Schema$BillingRatesListResponse {
        /**
         * Billing rates collection.
         */
        billingRates?: Schema$BillingRate[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$BillingRateTieredRate {
        /**
         * The maximum for this tier range.
         */
        highValue?: string | null;
        /**
         * The minimum for this tier range.
         */
        lowValue?: string | null;
        /**
         * Rate in micros for this tier.
         */
        rateInMicros?: string | null;
    }
    /**
     * Contains information about a browser that can be targeted by ads.
     */
    export interface Schema$Browser {
        /**
         * ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
         */
        browserVersionId?: string | null;
        /**
         * DART ID of this browser. This is the ID used when generating reports.
         */
        dartId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
         */
        kind?: string | null;
        /**
         * Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
         */
        majorVersion?: string | null;
        /**
         * Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
         */
        minorVersion?: string | null;
        /**
         * Name of this browser.
         */
        name?: string | null;
    }
    /**
     * Browser List Response
     */
    export interface Schema$BrowsersListResponse {
        /**
         * Browser collection.
         */
        browsers?: Schema$Browser[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".
         */
        kind?: string | null;
    }
    /**
     * Contains properties of a Campaign Manager campaign.
     */
    export interface Schema$Campaign {
        /**
         * Account ID of this campaign. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Ad blocking settings for this campaign.
         */
        adBlockingConfiguration?: Schema$AdBlockingConfiguration;
        /**
         * Additional creative optimization configurations for the campaign.
         */
        additionalCreativeOptimizationConfigurations?: Schema$CreativeOptimizationConfiguration[];
        /**
         * Advertiser group ID of the associated advertiser.
         */
        advertiserGroupId?: string | null;
        /**
         * Advertiser ID of this campaign. This is a required field.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether this campaign has been archived.
         */
        archived?: boolean | null;
        /**
         * Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
         */
        audienceSegmentGroups?: Schema$AudienceSegmentGroup[];
        /**
         * Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.
         */
        billingInvoiceCode?: string | null;
        /**
         * Click-through URL suffix override properties for this campaign.
         */
        clickThroughUrlSuffixProperties?: Schema$ClickThroughUrlSuffixProperties;
        /**
         * Arbitrary comments about this campaign. Must be less than 256 characters long.
         */
        comment?: string | null;
        /**
         * Information about the creation of this campaign. This is a read-only field.
         */
        createInfo?: Schema$LastModifiedInfo;
        /**
         * List of creative group IDs that are assigned to the campaign.
         */
        creativeGroupIds?: string[] | null;
        /**
         * Creative optimization configuration for the campaign.
         */
        creativeOptimizationConfiguration?: Schema$CreativeOptimizationConfiguration;
        /**
         * Click-through event tag ID override properties for this campaign.
         */
        defaultClickThroughEventTagProperties?: Schema$DefaultClickThroughEventTagProperties;
        /**
         * The default landing page ID for this campaign.
         */
        defaultLandingPageId?: string | null;
        endDate?: string | null;
        /**
         * Overrides that can be used to activate or deactivate advertiser event tags.
         */
        eventTagOverrides?: Schema$EventTagOverride[];
        /**
         * External ID for this campaign.
         */
        externalId?: string | null;
        /**
         * ID of this campaign. This is a read-only auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this campaign. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this campaign. This is a read-only field.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Measurement partner campaign link for tag wrapping.
         */
        measurementPartnerLink?: Schema$MeasurementPartnerCampaignLink;
        /**
         * Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser.
         */
        name?: string | null;
        startDate?: string | null;
        /**
         * Subaccount ID of this campaign. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
    }
    /**
     * Identifies a creative which has been associated with a given campaign.
     */
    export interface Schema$CampaignCreativeAssociation {
        /**
         * ID of the creative associated with the campaign. This is a required field.
         */
        creativeId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".
         */
        kind?: string | null;
    }
    /**
     * Campaign Creative Association List Response
     */
    export interface Schema$CampaignCreativeAssociationsListResponse {
        /**
         * Campaign creative association collection
         */
        campaignCreativeAssociations?: Schema$CampaignCreativeAssociation[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Campaign List Response
     */
    export interface Schema$CampaignsListResponse {
        /**
         * Campaign collection.
         */
        campaigns?: Schema$Campaign[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents a summarized campaign information associated with this invoice.
     */
    export interface Schema$CampaignSummary {
        /**
         * Campaign billing invoice code.
         */
        billingInvoiceCode?: string | null;
        /**
         * Campaign ID.
         */
        campaignId?: string | null;
        /**
         * The pre-tax amount for this campaign, in micros of the invoice's currency.
         */
        preTaxAmountMicros?: string | null;
        /**
         * The tax amount for this campaign, in micros of the invoice's currency.
         */
        taxAmountMicros?: string | null;
        /**
         * The total amount of charges for this campaign, in micros of the invoice's currency.
         */
        totalAmountMicros?: string | null;
    }
    /**
     * Describes a change that a user has made to a resource.
     */
    export interface Schema$ChangeLog {
        /**
         * Account ID of the modified object.
         */
        accountId?: string | null;
        /**
         * Action which caused the change.
         */
        action?: string | null;
        changeTime?: string | null;
        /**
         * Field name of the object which changed.
         */
        fieldName?: string | null;
        /**
         * ID of this change log.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
         */
        kind?: string | null;
        /**
         * New value of the object field.
         */
        newValue?: string | null;
        /**
         * ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
         */
        objectId?: string | null;
        /**
         * Object type of the change log.
         */
        objectType?: string | null;
        /**
         * Old value of the object field.
         */
        oldValue?: string | null;
        /**
         * Subaccount ID of the modified object.
         */
        subaccountId?: string | null;
        /**
         * Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.
         */
        transactionId?: string | null;
        /**
         * ID of the user who modified the object.
         */
        userProfileId?: string | null;
        /**
         * User profile name of the user who modified the object.
         */
        userProfileName?: string | null;
    }
    /**
     * Change Log List Response
     */
    export interface Schema$ChangeLogsListResponse {
        /**
         * Change log collection.
         */
        changeLogs?: Schema$ChangeLog[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents a DfaReporting channel grouping.
     */
    export interface Schema$ChannelGrouping {
        /**
         * ChannelGrouping fallback name.
         */
        fallbackName?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#channelGrouping.
         */
        kind?: string | null;
        /**
         * ChannelGrouping name.
         */
        name?: string | null;
        /**
         * The rules contained within this channel grouping.
         */
        rules?: Schema$ChannelGroupingRule[];
    }
    /**
     * Represents a DfaReporting channel grouping rule.
     */
    export interface Schema$ChannelGroupingRule {
        /**
         * The disjunctive match statements contained within this rule.
         */
        disjunctiveMatchStatements?: Schema$DisjunctiveMatchStatement[];
        /**
         * The kind of resource this is, in this case dfareporting#channelGroupingRule.
         */
        kind?: string | null;
        /**
         * Rule name.
         */
        name?: string | null;
    }
    /**
     * City List Response
     */
    export interface Schema$CitiesListResponse {
        /**
         * City collection.
         */
        cities?: Schema$City[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".
         */
        kind?: string | null;
    }
    /**
     * Contains information about a city that can be targeted by ads.
     */
    export interface Schema$City {
        /**
         * Country code of the country to which this city belongs.
         */
        countryCode?: string | null;
        /**
         * DART ID of the country to which this city belongs.
         */
        countryDartId?: string | null;
        /**
         * DART ID of this city. This is the ID used for targeting and generating reports.
         */
        dartId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
         */
        kind?: string | null;
        /**
         * Metro region code of the metro region (DMA) to which this city belongs.
         */
        metroCode?: string | null;
        /**
         * ID of the metro region (DMA) to which this city belongs.
         */
        metroDmaId?: string | null;
        /**
         * Name of this city.
         */
        name?: string | null;
        /**
         * Region code of the region to which this city belongs.
         */
        regionCode?: string | null;
        /**
         * DART ID of the region to which this city belongs.
         */
        regionDartId?: string | null;
    }
    /**
     * Creative Click Tag.
     */
    export interface Schema$ClickTag {
        /**
         * Parameter value for the specified click tag. This field contains a click-through url.
         */
        clickThroughUrl?: Schema$CreativeClickThroughUrl;
        /**
         * Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        eventName?: string | null;
        /**
         * Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field.
         */
        name?: string | null;
    }
    /**
     * Click-through URL
     */
    export interface Schema$ClickThroughUrl {
        /**
         * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
         */
        computedClickThroughUrl?: string | null;
        /**
         * Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.
         */
        customClickThroughUrl?: string | null;
        /**
         * Whether the campaign default landing page is used.
         */
        defaultLandingPage?: boolean | null;
        /**
         * ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.
         */
        landingPageId?: string | null;
    }
    /**
     * Click Through URL Suffix settings.
     */
    export interface Schema$ClickThroughUrlSuffixProperties {
        /**
         * Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
         */
        clickThroughUrlSuffix?: string | null;
        /**
         * Whether this entity should override the inherited click-through URL suffix with its own defined value.
         */
        overrideInheritedSuffix?: boolean | null;
    }
    /**
     * Companion Click-through override.
     */
    export interface Schema$CompanionClickThroughOverride {
        /**
         * Click-through URL of this companion click-through override.
         */
        clickThroughUrl?: Schema$ClickThroughUrl;
        /**
         * ID of the creative for this companion click-through override.
         */
        creativeId?: string | null;
    }
    /**
     * Companion Settings
     */
    export interface Schema$CompanionSetting {
        /**
         * Whether companions are disabled for this placement.
         */
        companionsDisabled?: boolean | null;
        /**
         * Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes.
         */
        enabledSizes?: Schema$Size[];
        /**
         * Whether to serve only static images as companions.
         */
        imageOnly?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting".
         */
        kind?: string | null;
    }
    /**
     * Represents a response to the queryCompatibleFields method.
     */
    export interface Schema$CompatibleFields {
        /**
         * Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
         */
        crossDimensionReachReportCompatibleFields?: Schema$CrossDimensionReachReportCompatibleFields;
        /**
         * Contains items that are compatible to be selected for a report of type "FLOODLIGHT".
         */
        floodlightReportCompatibleFields?: Schema$FloodlightReportCompatibleFields;
        /**
         * The kind of resource this is, in this case dfareporting#compatibleFields.
         */
        kind?: string | null;
        /**
         * Contains items that are compatible to be selected for a report of type "PATH_ATTRIBUTION".
         */
        pathAttributionReportCompatibleFields?: Schema$PathReportCompatibleFields;
        /**
         * Contains items that are compatible to be selected for a report of type "PATH".
         */
        pathReportCompatibleFields?: Schema$PathReportCompatibleFields;
        /**
         * Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
         */
        pathToConversionReportCompatibleFields?: Schema$PathToConversionReportCompatibleFields;
        /**
         * Contains items that are compatible to be selected for a report of type "REACH".
         */
        reachReportCompatibleFields?: Schema$ReachReportCompatibleFields;
        /**
         * Contains items that are compatible to be selected for a report of type "STANDARD".
         */
        reportCompatibleFields?: Schema$ReportCompatibleFields;
    }
    /**
     * Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
     */
    export interface Schema$ConnectionType {
        /**
         * ID of this connection type.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
         */
        kind?: string | null;
        /**
         * Name of this connection type.
         */
        name?: string | null;
    }
    /**
     * Connection Type List Response
     */
    export interface Schema$ConnectionTypesListResponse {
        /**
         * Collection of connection types such as broadband and mobile.
         */
        connectionTypes?: Schema$ConnectionType[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".
         */
        kind?: string | null;
    }
    /**
     * Content Category List Response
     */
    export interface Schema$ContentCategoriesListResponse {
        /**
         * Content category collection.
         */
        contentCategories?: Schema$ContentCategory[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$ContentCategory {
        /**
         * Account ID of this content category. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * ID of this content category. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
         */
        kind?: string | null;
        /**
         * Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.
         */
        name?: string | null;
    }
    /**
     * A Conversion represents when a user successfully performs a desired action after seeing an ad.
     */
    export interface Schema$Conversion {
        /**
         * This represents consent for ad user data.
         */
        adUserDataConsent?: string | null;
        /**
         * Whether this particular request may come from a user under the age of 13, under COPPA compliance.
         */
        childDirectedTreatment?: boolean | null;
        /**
         * Custom floodlight variables. This field may only be used when calling batchinsert; it is not supported by batchupdate.
         */
        customVariables?: Schema$CustomFloodlightVariable[];
        /**
         * The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or impressionId is a required field.
         */
        dclid?: string | null;
        /**
         * The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field.
         */
        encryptedUserId?: string | null;
        /**
         * A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid dclid, and impressionId. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field.
         */
        encryptedUserIdCandidates?: string[] | null;
        /**
         * Floodlight Activity ID of this conversion. This is a required field.
         */
        floodlightActivityId?: string | null;
        /**
         * Floodlight Configuration ID of this conversion. This is a required field.
         */
        floodlightConfigurationId?: string | null;
        /**
         * The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid or impressionId is a required field.
         */
        gclid?: string | null;
        /**
         * The impression ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, and gclid. One of these identifiers must be set.
         */
        impressionId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion".
         */
        kind?: string | null;
        /**
         * Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing.
         */
        limitAdTracking?: boolean | null;
        /**
         * The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserId orencryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid or impressionIdis a required field.
         */
        matchId?: string | null;
        /**
         * The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid or impressionId is a required field.
         */
        mobileDeviceId?: string | null;
        /**
         * Whether the conversion was for a non personalized ad.
         */
        nonPersonalizedAd?: boolean | null;
        /**
         * The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field.
         */
        ordinal?: string | null;
        /**
         * The quantity of the conversion. This is a required field.
         */
        quantity?: string | null;
        /**
         * The timestamp of conversion, in Unix epoch micros. This is a required field.
         */
        timestampMicros?: string | null;
        /**
         * Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR).
         */
        treatmentForUnderage?: boolean | null;
        /**
         * The user identifiers to enhance the conversion. The maximum number of user identifiers for each conversion is 5.
         */
        userIdentifiers?: Schema$UserIdentifier[];
        /**
         * The value of the conversion. This is a required field.
         */
        value?: number | null;
    }
    /**
     * The error code and description for a conversion that failed to insert or update.
     */
    export interface Schema$ConversionError {
        /**
         * The error code.
         */
        code?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".
         */
        kind?: string | null;
        /**
         * A description of the error.
         */
        message?: string | null;
    }
    /**
     * Insert Conversions Request.
     */
    export interface Schema$ConversionsBatchInsertRequest {
        /**
         * The set of conversions to insert.
         */
        conversions?: Schema$Conversion[];
        /**
         * Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[] is used.
         */
        encryptionInfo?: Schema$EncryptionInfo;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".
         */
        kind?: string | null;
    }
    /**
     * Insert Conversions Response.
     */
    export interface Schema$ConversionsBatchInsertResponse {
        /**
         * Indicates that some or all conversions failed to insert.
         */
        hasFailures?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".
         */
        kind?: string | null;
        /**
         * The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
         */
        status?: Schema$ConversionStatus[];
    }
    /**
     * Update Conversions Request.
     */
    export interface Schema$ConversionsBatchUpdateRequest {
        /**
         * The set of conversions to update.
         */
        conversions?: Schema$Conversion[];
        /**
         * Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used.
         */
        encryptionInfo?: Schema$EncryptionInfo;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".
         */
        kind?: string | null;
    }
    /**
     * Update Conversions Response.
     */
    export interface Schema$ConversionsBatchUpdateResponse {
        /**
         * Indicates that some or all conversions failed to update.
         */
        hasFailures?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".
         */
        kind?: string | null;
        /**
         * The update status of each conversion. Statuses are returned in the same order that conversions are updated.
         */
        status?: Schema$ConversionStatus[];
    }
    /**
     * The original conversion that was inserted or updated and whether there were any errors.
     */
    export interface Schema$ConversionStatus {
        /**
         * The original conversion that was inserted or updated.
         */
        conversion?: Schema$Conversion;
        /**
         * A list of errors related to this conversion.
         */
        errors?: Schema$ConversionError[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".
         */
        kind?: string | null;
    }
    /**
     * Country List Response
     */
    export interface Schema$CountriesListResponse {
        /**
         * Country collection.
         */
        countries?: Schema$Country[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".
         */
        kind?: string | null;
    }
    /**
     * Contains information about a country that can be targeted by ads.
     */
    export interface Schema$Country {
        /**
         * Country code.
         */
        countryCode?: string | null;
        /**
         * DART ID of this country. This is the ID used for targeting and generating reports.
         */
        dartId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
         */
        kind?: string | null;
        /**
         * Name of this country.
         */
        name?: string | null;
        /**
         * Whether ad serving supports secure servers in this country.
         */
        sslEnabled?: boolean | null;
    }
    /**
     * Contains properties of a Creative.
     */
    export interface Schema$Creative {
        /**
         * Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
         */
        accountId?: string | null;
        /**
         * Whether the creative is active. Applicable to all creative types.
         */
        active?: boolean | null;
        /**
         * Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE.
         */
        additionalSizes?: Schema$Size[];
        /**
         * Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
         */
        adParameters?: string | null;
        /**
         * Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        adTagKeys?: string[] | null;
        /**
         * Required. Advertiser ID of this creative. This is a required field. Applicable to all creative types.
         */
        advertiserId?: string | null;
        /**
         * Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE.
         */
        allowScriptAccess?: boolean | null;
        /**
         * Whether the creative is archived. Applicable to all creative types.
         */
        archived?: boolean | null;
        /**
         * Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        artworkType?: string | null;
        /**
         * Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types.
         */
        authoringSource?: string | null;
        /**
         * Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
         */
        authoringTool?: string | null;
        /**
         * Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY.
         */
        autoAdvanceImages?: boolean | null;
        /**
         * The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.
         */
        backgroundColor?: string | null;
        /**
         * Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE.
         */
        backupImageClickThroughUrl?: Schema$CreativeClickThroughUrl;
        /**
         * List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        backupImageFeatures?: string[] | null;
        /**
         * Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        backupImageReportingLabel?: string | null;
        /**
         * Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        backupImageTargetWindow?: Schema$TargetWindow;
        /**
         * Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        clickTags?: Schema$ClickTag[];
        /**
         * Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.
         */
        commercialId?: string | null;
        /**
         * List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false.
         */
        companionCreatives?: string[] | null;
        /**
         * Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL" - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL"
         */
        compatibility?: string[] | null;
        /**
         * Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        convertFlashToHtml5?: boolean | null;
        /**
         * List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID.
         */
        counterCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
         */
        creativeAssets?: Schema$CreativeAsset[];
        /**
         * Required if dynamicAssetSelection is true.
         */
        creativeAssetSelection?: Schema$CreativeAssetSelection;
        /**
         * Creative field assignments for this creative. Applicable to all creative types.
         */
        creativeFieldAssignments?: Schema$CreativeFieldAssignment[];
        /**
         * Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        customKeyValues?: string[] | null;
        /**
         * Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives.
         */
        dynamicAssetSelection?: boolean | null;
        /**
         * List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        exitCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE.
         */
        fsCommand?: Schema$FsCommand;
        /**
         * HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
         */
        htmlCode?: string | null;
        /**
         * Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.
         */
        htmlCodeLocked?: boolean | null;
        /**
         * ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".
         */
        kind?: string | null;
        /**
         * Creative last modification information. This is a read-only field. Applicable to all creative types.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        latestTraffickedCreativeId?: string | null;
        /**
         * Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID.
         */
        mediaDescription?: string | null;
        /**
         * Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID.
         */
        mediaDuration?: number | null;
        /**
         * Required. Name of the creative. This must be less than 256 characters long. Applicable to all creative types.
         */
        name?: string | null;
        /**
         * Online behavioral advertising icon to be added to the creative. Applicable to the following creative types: all INSTREAM_VIDEO.
         */
        obaIcon?: Schema$ObaIcon;
        /**
         * Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
         */
        overrideCss?: string | null;
        /**
         * Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO.
         */
        progressOffset?: Schema$VideoOffset;
        /**
         * URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT
         */
        redirectUrl?: string | null;
        /**
         * ID of current rendering version. This is a read-only field. Applicable to all creative types.
         */
        renderingId?: string | null;
        /**
         * Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.
         */
        renderingIdDimensionValue?: Schema$DimensionValue;
        /**
         * The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        requiredFlashPluginVersion?: string | null;
        /**
         * The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        requiredFlashVersion?: number | null;
        /**
         * Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
         */
        size?: Schema$Size;
        /**
         * Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO.
         */
        skipOffset?: Schema$VideoOffset;
        /**
         * Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
         */
        skippable?: boolean | null;
        /**
         * Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
         */
        sslCompliant?: boolean | null;
        /**
         * Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types.
         */
        sslOverride?: boolean | null;
        /**
         * Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        studioAdvertiserId?: string | null;
        /**
         * Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        studioCreativeId?: string | null;
        /**
         * Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        studioTraffickedCreativeId?: string | null;
        /**
         * Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
         */
        subaccountId?: string | null;
        /**
         * Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.
         */
        thirdPartyBackupImageImpressionsUrl?: string | null;
        /**
         * Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.
         */
        thirdPartyRichMediaImpressionsUrl?: string | null;
        /**
         * Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID.
         */
        thirdPartyUrls?: Schema$ThirdPartyTrackingUrl[];
        /**
         * List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE.
         */
        timerCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
         */
        totalFileSize?: string | null;
        /**
         * Required. Type of this creative. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
         */
        type?: string | null;
        /**
         * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and INSTREAM_VIDEO and VPAID.
         */
        universalAdId?: Schema$UniversalAdId;
        /**
         * The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types.
         */
        version?: number | null;
    }
    /**
     * Creative Asset.
     */
    export interface Schema$CreativeAsset {
        /**
         * Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        actionScript3?: boolean | null;
        /**
         * Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        active?: boolean | null;
        /**
         * Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render.
         */
        additionalSizes?: Schema$Size[];
        /**
         * Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .
         */
        alignment?: string | null;
        /**
         * Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
         */
        artworkType?: string | null;
        /**
         * Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
         */
        assetIdentifier?: Schema$CreativeAssetId;
        /**
         * Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        audioBitRate?: number | null;
        /**
         * Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        audioSampleRate?: number | null;
        /**
         * Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.
         */
        backupImageExit?: Schema$CreativeCustomEvent;
        /**
         * Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        bitRate?: number | null;
        /**
         * Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
         */
        childAssetType?: string | null;
        /**
         * Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
         */
        collapsedSize?: Schema$Size;
        /**
         * List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
         */
        companionCreativeIds?: string[] | null;
        /**
         * Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0.
         */
        customStartTimeValue?: number | null;
        /**
         * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        detectedFeatures?: string[] | null;
        /**
         * Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
         */
        displayType?: string | null;
        /**
         * Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.
         */
        duration?: number | null;
        /**
         * Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
         */
        durationType?: string | null;
        /**
         * Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
         */
        expandedDimension?: Schema$Size;
        /**
         * File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
         */
        fileSize?: string | null;
        /**
         * Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        flashVersion?: number | null;
        /**
         * Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
         */
        frameRate?: number | null;
        /**
         * Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
         */
        hideFlashObjects?: boolean | null;
        /**
         * Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
         */
        hideSelectionBoxes?: boolean | null;
        /**
         * Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
         */
        horizontallyLocked?: boolean | null;
        /**
         * Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of the asset. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        mediaDuration?: number | null;
        /**
         * Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
         */
        mimeType?: string | null;
        /**
         * Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
         */
        offset?: Schema$OffsetPosition;
        /**
         * Orientation of video asset. This is a read-only, auto-generated field.
         */
        orientation?: string | null;
        /**
         * Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA.
         */
        originalBackup?: boolean | null;
        /**
         * Whether this asset is used as a polite load asset.
         */
        politeLoad?: boolean | null;
        /**
         * Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.
         */
        position?: Schema$OffsetPosition;
        /**
         * Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
         */
        positionLeftUnit?: string | null;
        /**
         * Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
         */
        positionTopUnit?: string | null;
        /**
         * Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
         */
        progressiveServingUrl?: string | null;
        /**
         * Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
         */
        pushdown?: boolean | null;
        /**
         * Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.
         */
        pushdownDuration?: number | null;
        /**
         * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives.
         */
        role?: string | null;
        /**
         * Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
         */
        size?: Schema$Size;
        /**
         * Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
         */
        sslCompliant?: boolean | null;
        /**
         * Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
         */
        startTimeType?: string | null;
        /**
         * Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
         */
        streamingServingUrl?: string | null;
        /**
         * Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
         */
        transparency?: boolean | null;
        /**
         * Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
         */
        verticallyLocked?: boolean | null;
        /**
         * Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
         */
        windowMode?: string | null;
        /**
         * zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.
         */
        zIndex?: number | null;
        /**
         * File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
         */
        zipFilename?: string | null;
        /**
         * Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
         */
        zipFilesize?: string | null;
    }
    /**
     * Creative Asset ID.
     */
    export interface Schema$CreativeAssetId {
        /**
         * Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
         */
        name?: string | null;
        /**
         * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
         */
        type?: string | null;
    }
    /**
     * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
     */
    export interface Schema$CreativeAssetMetadata {
        /**
         * ID of the creative asset. This is a required field.
         */
        assetIdentifier?: Schema$CreativeAssetId;
        /**
         * List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset.
         */
        clickTags?: Schema$ClickTag[];
        /**
         * List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
         */
        counterCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
         */
        detectedFeatures?: string[] | null;
        /**
         * List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
         */
        exitCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * Numeric ID of the asset. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
         */
        kind?: string | null;
        /**
         * True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field.
         */
        richMedia?: boolean | null;
        /**
         * List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
         */
        timerCustomEvents?: Schema$CreativeCustomEvent[];
        /**
         * Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID"
         */
        warnedValidationRules?: string[] | null;
    }
    /**
     * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
     */
    export interface Schema$CreativeAssetSelection {
        /**
         * A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field.
         */
        defaultAssetId?: string | null;
        /**
         * Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
         */
        rules?: Schema$Rule[];
    }
    /**
     * Creative Assignment.
     */
    export interface Schema$CreativeAssignment {
        /**
         * Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
         */
        active?: boolean | null;
        /**
         * Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
         */
        applyEventTags?: boolean | null;
        /**
         * Click-through URL of the creative assignment.
         */
        clickThroughUrl?: Schema$ClickThroughUrl;
        /**
         * Companion creative overrides for this creative assignment. Applicable to video ads.
         */
        companionCreativeOverrides?: Schema$CompanionClickThroughOverride[];
        /**
         * Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
         */
        creativeGroupAssignments?: Schema$CreativeGroupAssignment[];
        /**
         * ID of the creative to be assigned. This is a required field.
         */
        creativeId?: string | null;
        /**
         * Dimension value for the ID of the creative. This is a read-only, auto-generated field.
         */
        creativeIdDimensionValue?: Schema$DimensionValue;
        endTime?: string | null;
        /**
         * Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR
         */
        richMediaExitOverrides?: Schema$RichMediaExitOverride[];
        /**
         * Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive.
         */
        sequence?: number | null;
        /**
         * Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
         */
        sslCompliant?: boolean | null;
        startTime?: string | null;
        /**
         * Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.
         */
        weight?: number | null;
    }
    /**
     * Click-through URL
     */
    export interface Schema$CreativeClickThroughUrl {
        /**
         * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field.
         */
        computedClickThroughUrl?: string | null;
        /**
         * Custom click-through URL. Applicable if the landingPageId field is left unset.
         */
        customClickThroughUrl?: string | null;
        /**
         * ID of the landing page for the click-through URL.
         */
        landingPageId?: string | null;
    }
    /**
     * Creative Custom Event.
     */
    export interface Schema$CreativeCustomEvent {
        /**
         * Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
         */
        advertiserCustomEventId?: string | null;
        /**
         * User-entered name for the event.
         */
        advertiserCustomEventName?: string | null;
        /**
         * Type of the event. This is a read-only field.
         */
        advertiserCustomEventType?: string | null;
        /**
         * Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.
         */
        artworkLabel?: string | null;
        /**
         * Artwork type used by the creative.This is a read-only field.
         */
        artworkType?: string | null;
        /**
         * Exit click-through URL for the event. This field is used only for exit events.
         */
        exitClickThroughUrl?: Schema$CreativeClickThroughUrl;
        /**
         * ID of this event. This is a required field and should not be modified after insertion.
         */
        id?: string | null;
        /**
         * Properties for rich media popup windows. This field is used only for exit events.
         */
        popupWindowProperties?: Schema$PopupWindowProperties;
        /**
         * Target type used by the event.
         */
        targetType?: string | null;
        /**
         * Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
         */
        videoReportingId?: string | null;
    }
    /**
     * Contains properties of a creative field.
     */
    export interface Schema$CreativeField {
        /**
         * Account ID of this creative field. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this creative field. This is a required field on insertion.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * ID of this creative field. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
         */
        kind?: string | null;
        /**
         * Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.
         */
        name?: string | null;
        /**
         * Subaccount ID of this creative field. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
    }
    /**
     * Creative Field Assignment.
     */
    export interface Schema$CreativeFieldAssignment {
        /**
         * ID of the creative field.
         */
        creativeFieldId?: string | null;
        /**
         * ID of the creative field value.
         */
        creativeFieldValueId?: string | null;
    }
    /**
     * Creative Field List Response
     */
    export interface Schema$CreativeFieldsListResponse {
        /**
         * Creative field collection.
         */
        creativeFields?: Schema$CreativeField[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Contains properties of a creative field value.
     */
    export interface Schema$CreativeFieldValue {
        /**
         * ID of this creative field value. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
         */
        kind?: string | null;
        /**
         * Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
         */
        value?: string | null;
    }
    /**
     * Creative Field Value List Response
     */
    export interface Schema$CreativeFieldValuesListResponse {
        /**
         * Creative field value collection.
         */
        creativeFieldValues?: Schema$CreativeFieldValue[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Contains properties of a creative group.
     */
    export interface Schema$CreativeGroup {
        /**
         * Account ID of this creative group. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this creative group. This is a required field on insertion.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
         */
        groupNumber?: number | null;
        /**
         * ID of this creative group. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
         */
        kind?: string | null;
        /**
         * Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.
         */
        name?: string | null;
        /**
         * Subaccount ID of this creative group. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
    }
    /**
     * Creative Group Assignment.
     */
    export interface Schema$CreativeGroupAssignment {
        /**
         * ID of the creative group to be assigned.
         */
        creativeGroupId?: string | null;
        /**
         * Creative group number of the creative group assignment.
         */
        creativeGroupNumber?: string | null;
    }
    /**
     * Creative Group List Response
     */
    export interface Schema$CreativeGroupsListResponse {
        /**
         * Creative group collection.
         */
        creativeGroups?: Schema$CreativeGroup[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Creative optimization settings.
     */
    export interface Schema$CreativeOptimizationConfiguration {
        /**
         * ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
         */
        id?: string | null;
        /**
         * Name of this creative optimization config. This is a required field and must be less than 129 characters long.
         */
        name?: string | null;
        /**
         * List of optimization activities associated with this configuration.
         */
        optimizationActivitys?: Schema$OptimizationActivity[];
        /**
         * Optimization model for this configuration.
         */
        optimizationModel?: string | null;
    }
    /**
     * Creative Rotation.
     */
    export interface Schema$CreativeRotation {
        /**
         * Creative assignments in this creative rotation.
         */
        creativeAssignments?: Schema$CreativeAssignment[];
        /**
         * Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.
         */
        creativeOptimizationConfigurationId?: string | null;
        /**
         * Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
         */
        type?: string | null;
        /**
         * Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
         */
        weightCalculationStrategy?: string | null;
    }
    /**
     * Creative List Response
     */
    export interface Schema$CreativesListResponse {
        /**
         * Creative collection.
         */
        creatives?: Schema$Creative[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
     */
    export interface Schema$CrossDimensionReachReportCompatibleFields {
        /**
         * Dimensions which are compatible to be selected in the "breakdown" section of the report.
         */
        breakdown?: Schema$Dimension[];
        /**
         * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
         */
        dimensionFilters?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
        /**
         * Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
         */
        overlapMetrics?: Schema$Metric[];
    }
    /**
     * A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.
     */
    export interface Schema$CustomFloodlightVariable {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".
         */
        kind?: string | null;
        /**
         * The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.
         */
        type?: string | null;
        /**
         * The value of the custom floodlight variable. The length of string must not exceed 100 characters.
         */
        value?: string | null;
    }
    /**
     * Represents a Custom Rich Media Events group.
     */
    export interface Schema$CustomRichMediaEvents {
        /**
         * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
         */
        filteredEventIds?: Schema$DimensionValue[];
        /**
         * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
         */
        kind?: string | null;
    }
    /**
     * Custom Viewability Metric
     */
    export interface Schema$CustomViewabilityMetric {
        /**
         * Configuration of the custom viewability metric.
         */
        configuration?: Schema$CustomViewabilityMetricConfiguration;
        /**
         * ID of the custom viewability metric.
         */
        id?: string | null;
        /**
         * Name of the custom viewability metric.
         */
        name?: string | null;
    }
    /**
     * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
     */
    export interface Schema$CustomViewabilityMetricConfiguration {
        /**
         * Whether the video must be audible to count an impression.
         */
        audible?: boolean | null;
        /**
         * The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used.
         */
        timeMillis?: number | null;
        /**
         * The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used.
         */
        timePercent?: number | null;
        /**
         * The percentage of video that must be on screen for the Custom Viewability Metric to count an impression.
         */
        viewabilityPercent?: number | null;
    }
    /**
     * Represents a date range.
     */
    export interface Schema$DateRange {
        endDate?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#dateRange.
         */
        kind?: string | null;
        /**
         * The date range relative to the date of when the report is run.
         */
        relativeDateRange?: string | null;
        startDate?: string | null;
    }
    /**
     * Day Part Targeting.
     */
    export interface Schema$DayPartTargeting {
        /**
         * Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY"
         */
        daysOfWeek?: string[] | null;
        /**
         * Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
         */
        hoursOfDay?: number[] | null;
        /**
         * Whether or not to use the user's local time. If false, the America/New York time zone applies.
         */
        userLocalTime?: boolean | null;
    }
    /**
     * Contains information about a landing page deep link.
     */
    export interface Schema$DeepLink {
        /**
         * The URL of the mobile app being linked to.
         */
        appUrl?: string | null;
        /**
         * The fallback URL. This URL will be served to users who do not have the mobile app installed.
         */
        fallbackUrl?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink".
         */
        kind?: string | null;
        /**
         * The mobile app targeted by this deep link.
         */
        mobileApp?: Schema$MobileApp;
        /**
         * Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE.
         */
        remarketingListIds?: string[] | null;
    }
    /**
     * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
     */
    export interface Schema$DefaultClickThroughEventTagProperties {
        /**
         * ID of the click-through event tag to apply to all ads in this entity's scope.
         */
        defaultClickThroughEventTagId?: string | null;
        /**
         * Whether this entity should override the inherited default click-through event tag with its own defined value.
         */
        overrideInheritedEventTag?: boolean | null;
    }
    /**
     * Delivery Schedule.
     */
    export interface Schema$DeliverySchedule {
        /**
         * Limit on the number of times an individual user can be served the ad within a specified period of time.
         */
        frequencyCap?: Schema$FrequencyCap;
        /**
         * Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.
         */
        hardCutoff?: boolean | null;
        /**
         * Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.
         */
        impressionRatio?: string | null;
        /**
         * Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
         */
        priority?: string | null;
    }
    /**
     * Google Ad Manager Settings
     */
    export interface Schema$DfpSettings {
        /**
         * Ad Manager network code for this directory site.
         */
        dfpNetworkCode?: string | null;
        /**
         * Ad Manager network name for this directory site.
         */
        dfpNetworkName?: string | null;
        /**
         * Whether this directory site accepts programmatic placements.
         */
        programmaticPlacementAccepted?: boolean | null;
        /**
         * Whether this directory site is available only via Publisher Portal.
         */
        publisherPortalOnly?: boolean | null;
        /**
         * Whether this directory site accepts publisher-paid tags.
         */
        pubPaidPlacementAccepted?: boolean | null;
    }
    /**
     * Represents a dimension.
     */
    export interface Schema$Dimension {
        /**
         * The kind of resource this is, in this case dfareporting#dimension.
         */
        kind?: string | null;
        /**
         * The dimension name, e.g. advertiser
         */
        name?: string | null;
    }
    /**
     * Represents a dimension filter.
     */
    export interface Schema$DimensionFilter {
        /**
         * The name of the dimension to filter.
         */
        dimensionName?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#dimensionFilter.
         */
        kind?: string | null;
        /**
         * The value of the dimension to filter.
         */
        value?: string | null;
    }
    /**
     * Represents a DimensionValue resource.
     */
    export interface Schema$DimensionValue {
        /**
         * The name of the dimension.
         */
        dimensionName?: string | null;
        /**
         * The eTag of this response for caching purposes.
         */
        etag?: string | null;
        /**
         * The ID associated with the value if available.
         */
        id?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#dimensionValue.
         */
        kind?: string | null;
        /**
         * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
         */
        matchType?: string | null;
        /**
         * The value of the dimension.
         */
        value?: string | null;
    }
    /**
     * Represents the list of DimensionValue resources.
     */
    export interface Schema$DimensionValueList {
        /**
         * The eTag of this response for caching purposes.
         */
        etag?: string | null;
        /**
         * The dimension values returned in this response.
         */
        items?: Schema$DimensionValue[];
        /**
         * The kind of list this is, in this case dfareporting#dimensionValueList.
         */
        kind?: string | null;
        /**
         * Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents a DimensionValuesRequest.
     */
    export interface Schema$DimensionValueRequest {
        /**
         * The name of the dimension for which values should be requested.
         */
        dimensionName?: string | null;
        endDate?: string | null;
        /**
         * The list of filters by which to filter values. The filters are ANDed.
         */
        filters?: Schema$DimensionFilter[];
        /**
         * The kind of request this is, in this case dfareporting#dimensionValueRequest .
         */
        kind?: string | null;
        startDate?: string | null;
    }
    /**
     * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
     */
    export interface Schema$DirectorySite {
        /**
         * ID of this directory site. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this directory site. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE"
         */
        inpageTagFormats?: string[] | null;
        /**
         * Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL"
         */
        interstitialTagFormats?: string[] | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
         */
        kind?: string | null;
        /**
         * Name of this directory site.
         */
        name?: string | null;
        /**
         * Directory site settings.
         */
        settings?: Schema$DirectorySiteSettings;
        /**
         * URL of this directory site.
         */
        url?: string | null;
    }
    /**
     * Directory Site Settings
     */
    export interface Schema$DirectorySiteSettings {
        /**
         * Whether this directory site has disabled active view creatives.
         */
        activeViewOptOut?: boolean | null;
        /**
         * Directory site Ad Manager settings.
         */
        dfpSettings?: Schema$DfpSettings;
        /**
         * Whether this site accepts in-stream video ads.
         */
        instreamVideoPlacementAccepted?: boolean | null;
        /**
         * Whether this site accepts interstitial ads.
         */
        interstitialPlacementAccepted?: boolean | null;
    }
    /**
     * Directory Site List Response
     */
    export interface Schema$DirectorySitesListResponse {
        /**
         * Directory site collection.
         */
        directorySites?: Schema$DirectorySite[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
     */
    export interface Schema$DisjunctiveMatchStatement {
        /**
         * The event filters contained within this disjunctive match statement.
         */
        eventFilters?: Schema$EventFilter[];
        /**
         * The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement.
         */
        kind?: string | null;
    }
    /**
     * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
     */
    export interface Schema$DynamicTargetingKey {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey".
         */
        kind?: string | null;
        /**
         * Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
         */
        name?: string | null;
        /**
         * ID of the object of this dynamic targeting key. This is a required field.
         */
        objectId?: string | null;
        /**
         * Type of the object of this dynamic targeting key. This is a required field.
         */
        objectType?: string | null;
    }
    /**
     * Dynamic Targeting Key List Response
     */
    export interface Schema$DynamicTargetingKeysListResponse {
        /**
         * Dynamic targeting key collection.
         */
        dynamicTargetingKeys?: Schema$DynamicTargetingKey[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".
         */
        kind?: string | null;
    }
    /**
     * A description of how user IDs are encrypted.
     */
    export interface Schema$EncryptionInfo {
        /**
         * The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
         */
        encryptionEntityId?: string | null;
        /**
         * The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
         */
        encryptionEntityType?: string | null;
        /**
         * Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
         */
        encryptionSource?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".
         */
        kind?: string | null;
    }
    /**
     * Represents a DfaReporting event filter.
     */
    export interface Schema$EventFilter {
        /**
         * The dimension filter contained within this EventFilter.
         */
        dimensionFilter?: Schema$PathReportDimensionValue;
        /**
         * The kind of resource this is, in this case dfareporting#eventFilter.
         */
        kind?: string | null;
        /**
         * Filter on a custom variable.
         */
        uvarFilter?: Schema$UvarFilter;
    }
    /**
     * Contains properties of an event tag.
     */
    export interface Schema$EventTag {
        /**
         * Account ID of this event tag. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
         */
        campaignId?: string | null;
        /**
         * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
         */
        campaignIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
         */
        enabledByDefault?: boolean | null;
        /**
         * Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
         */
        excludeFromAdxRequests?: boolean | null;
        /**
         * ID of this event tag. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
         */
        kind?: string | null;
        /**
         * Name of this event tag. This is a required field and must be less than 256 characters long.
         */
        name?: string | null;
        /**
         * Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
         */
        siteFilterType?: string | null;
        /**
         * Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter.
         */
        siteIds?: string[] | null;
        /**
         * Whether this tag is SSL-compliant or not. This is a read-only field.
         */
        sslCompliant?: boolean | null;
        /**
         * Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
         */
        status?: string | null;
        /**
         * Subaccount ID of this event tag. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
         */
        type?: string | null;
        /**
         * Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.
         */
        url?: string | null;
        /**
         * Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.
         */
        urlEscapeLevels?: number | null;
    }
    /**
     * Event tag override information.
     */
    export interface Schema$EventTagOverride {
        /**
         * Whether this override is enabled.
         */
        enabled?: boolean | null;
        /**
         * ID of this event tag override. This is a read-only, auto-generated field.
         */
        id?: string | null;
    }
    /**
     * Event Tag List Response
     */
    export interface Schema$EventTagsListResponse {
        /**
         * Event tag collection.
         */
        eventTags?: Schema$EventTag[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".
         */
        kind?: string | null;
    }
    /**
     * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
     */
    export interface Schema$File {
        /**
         * The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
         */
        dateRange?: Schema$DateRange;
        /**
         * Etag of this resource.
         */
        etag?: string | null;
        /**
         * The filename of the file.
         */
        fileName?: string | null;
        /**
         * The output format of the report. Only available once the file is available.
         */
        format?: string | null;
        /**
         * The unique ID of this report file.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".
         */
        kind?: string | null;
        /**
         * The timestamp in milliseconds since epoch when this file was last modified.
         */
        lastModifiedTime?: string | null;
        /**
         * The ID of the report this file was generated from.
         */
        reportId?: string | null;
        /**
         * The status of the report file.
         */
        status?: string | null;
        /**
         * The URLs where the completed report file can be downloaded.
         */
        urls?: {
            apiUrl?: string;
            browserUrl?: string;
        } | null;
    }
    /**
     * List of files for a report.
     */
    export interface Schema$FileList {
        /**
         * Etag of this resource.
         */
        etag?: string | null;
        /**
         * The files returned in this response.
         */
        items?: Schema$File[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList".
         */
        kind?: string | null;
        /**
         * Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * Flight
     */
    export interface Schema$Flight {
        endDate?: string | null;
        /**
         * Rate or cost of this flight.
         */
        rateOrCost?: string | null;
        startDate?: string | null;
        /**
         * Units of this flight.
         */
        units?: string | null;
    }
    /**
     * Floodlight Activity GenerateTag Response
     */
    export interface Schema$FloodlightActivitiesGenerateTagResponse {
        /**
         * Generated tag for this Floodlight activity. For global site tags, this is the event snippet.
         */
        floodlightActivityTag?: string | null;
        /**
         * The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more.
         */
        globalSiteTagGlobalSnippet?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".
         */
        kind?: string | null;
    }
    /**
     * Floodlight Activity List Response
     */
    export interface Schema$FloodlightActivitiesListResponse {
        /**
         * Floodlight activity collection.
         */
        floodlightActivities?: Schema$FloodlightActivity[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Contains properties of a Floodlight activity.
     */
    export interface Schema$FloodlightActivity {
        /**
         * Account ID of this floodlight activity. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether the activity is enabled for attribution.
         */
        attributionEnabled?: boolean | null;
        /**
         * Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING.
         */
        cacheBustingType?: string | null;
        /**
         * Counting method for conversions for this floodlight activity. This is a required field.
         */
        countingMethod?: string | null;
        /**
         * Dynamic floodlight tags.
         */
        defaultTags?: Schema$FloodlightActivityDynamicTag[];
        /**
         * URL where this tag will be deployed. If specified, must be less than 256 characters long.
         */
        expectedUrl?: string | null;
        /**
         * Floodlight activity group ID of this floodlight activity. This is a required field.
         */
        floodlightActivityGroupId?: string | null;
        /**
         * Name of the associated floodlight activity group. This is a read-only field.
         */
        floodlightActivityGroupName?: string | null;
        /**
         * Tag string of the associated floodlight activity group. This is a read-only field.
         */
        floodlightActivityGroupTagString?: string | null;
        /**
         * Type of the associated floodlight activity group. This is a read-only field.
         */
        floodlightActivityGroupType?: string | null;
        /**
         * Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration.
         */
        floodlightConfigurationId?: string | null;
        /**
         * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
         */
        floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
        /**
         * The type of Floodlight tag this activity will generate. This is a required field.
         */
        floodlightTagType?: string | null;
        /**
         * ID of this floodlight activity. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".
         */
        kind?: string | null;
        /**
         * Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.
         */
        name?: string | null;
        /**
         * General notes or implementation instructions for the tag.
         */
        notes?: string | null;
        /**
         * Publisher dynamic floodlight tags.
         */
        publisherTags?: Schema$FloodlightActivityPublisherDynamicTag[];
        /**
         * Whether this tag should use SSL.
         */
        secure?: boolean | null;
        /**
         * Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.
         */
        sslCompliant?: boolean | null;
        /**
         * Whether this floodlight activity must be SSL-compliant.
         */
        sslRequired?: boolean | null;
        /**
         * The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information.
         */
        status?: string | null;
        /**
         * Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
         */
        tagFormat?: string | null;
        /**
         * Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion.
         */
        tagString?: string | null;
        /**
         * List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive.
         */
        userDefinedVariableTypes?: string[] | null;
    }
    /**
     * Dynamic Tag
     */
    export interface Schema$FloodlightActivityDynamicTag {
        /**
         * ID of this dynamic tag. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Name of this tag.
         */
        name?: string | null;
        /**
         * Tag code.
         */
        tag?: string | null;
    }
    /**
     * Contains properties of a Floodlight activity group.
     */
    export interface Schema$FloodlightActivityGroup {
        /**
         * Account ID of this floodlight activity group. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Floodlight configuration ID of this floodlight activity group. This is a required field.
         */
        floodlightConfigurationId?: string | null;
        /**
         * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
         */
        floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
        /**
         * ID of this floodlight activity group. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
         */
        kind?: string | null;
        /**
         * Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
         */
        name?: string | null;
        /**
         * Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.
         */
        tagString?: string | null;
        /**
         * Type of the floodlight activity group. This is a required field that is read-only after insertion.
         */
        type?: string | null;
    }
    /**
     * Floodlight Activity Group List Response
     */
    export interface Schema$FloodlightActivityGroupsListResponse {
        /**
         * Floodlight activity group collection.
         */
        floodlightActivityGroups?: Schema$FloodlightActivityGroup[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Publisher Dynamic Tag
     */
    export interface Schema$FloodlightActivityPublisherDynamicTag {
        /**
         * Whether this tag is applicable only for click-throughs.
         */
        clickThrough?: boolean | null;
        /**
         * Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
         */
        directorySiteId?: string | null;
        /**
         * Dynamic floodlight tag.
         */
        dynamicTag?: Schema$FloodlightActivityDynamicTag;
        /**
         * Site ID of this dynamic tag.
         */
        siteId?: string | null;
        /**
         * Dimension value for the ID of the site. This is a read-only, auto-generated field.
         */
        siteIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether this tag is applicable only for view-throughs.
         */
        viewThrough?: boolean | null;
    }
    /**
     * Contains properties of a Floodlight configuration.
     */
    export interface Schema$FloodlightConfiguration {
        /**
         * Account ID of this floodlight configuration. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of the parent advertiser of this floodlight configuration.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether advertiser data is shared with Google Analytics.
         */
        analyticsDataSharingEnabled?: boolean | null;
        /**
         * Custom Viewability metric for the floodlight configuration.
         */
        customViewabilityMetric?: Schema$CustomViewabilityMetric;
        /**
         * Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
         */
        exposureToConversionEnabled?: boolean | null;
        firstDayOfWeek?: string | null;
        /**
         * ID of this floodlight configuration. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Whether in-app attribution tracking is enabled.
         */
        inAppAttributionTrackingEnabled?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
         */
        kind?: string | null;
        /**
         * Lookback window settings for this floodlight configuration.
         */
        lookbackConfiguration?: Schema$LookbackConfiguration;
        /**
         * Types of attribution options for natural search conversions.
         */
        naturalSearchConversionAttributionOption?: string | null;
        /**
         * Settings for Campaign Manager Omniture integration.
         */
        omnitureSettings?: Schema$OmnitureSettings;
        /**
         * Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Configuration settings for dynamic and image floodlight tags.
         */
        tagSettings?: Schema$TagSettings;
        /**
         * List of third-party authentication tokens enabled for this configuration.
         */
        thirdPartyAuthenticationTokens?: Schema$ThirdPartyAuthenticationToken[];
        /**
         * List of user defined variables enabled for this configuration.
         */
        userDefinedVariableConfigurations?: Schema$UserDefinedVariableConfiguration[];
    }
    /**
     * Floodlight Configuration List Response
     */
    export interface Schema$FloodlightConfigurationsListResponse {
        /**
         * Floodlight configuration collection.
         */
        floodlightConfigurations?: Schema$FloodlightConfiguration[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".
         */
        kind?: string | null;
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
     */
    export interface Schema$FloodlightReportCompatibleFields {
        /**
         * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
         */
        dimensionFilters?: Schema$Dimension[];
        /**
         * Dimensions which are compatible to be selected in the "dimensions" section of the report.
         */
        dimensions?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
    }
    /**
     * Frequency Cap.
     */
    export interface Schema$FrequencyCap {
        /**
         * Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.
         */
        duration?: string | null;
        /**
         * Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.
         */
        impressions?: string | null;
    }
    /**
     * FsCommand.
     */
    export interface Schema$FsCommand {
        /**
         * Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
         */
        left?: number | null;
        /**
         * Position in the browser where the window will open.
         */
        positionOption?: string | null;
        /**
         * Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
         */
        top?: number | null;
        /**
         * Height of the window.
         */
        windowHeight?: number | null;
        /**
         * Width of the window.
         */
        windowWidth?: number | null;
    }
    /**
     * Geographical Targeting.
     */
    export interface Schema$GeoTargeting {
        /**
         * Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.
         */
        cities?: Schema$City[];
        /**
         * Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.
         */
        countries?: Schema$Country[];
        /**
         * Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad.
         */
        excludeCountries?: boolean | null;
        /**
         * Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.
         */
        metros?: Schema$Metro[];
        /**
         * Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.
         */
        postalCodes?: Schema$PostalCode[];
        /**
         * Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.
         */
        regions?: Schema$Region[];
    }
    /**
     * Represents a buy from the Planning inventory store.
     */
    export interface Schema$InventoryItem {
        /**
         * Account ID of this inventory item.
         */
        accountId?: string | null;
        /**
         * Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
         */
        adSlots?: Schema$AdSlot[];
        /**
         * Advertiser ID of this inventory item.
         */
        advertiserId?: string | null;
        /**
         * Content category ID of this inventory item.
         */
        contentCategoryId?: string | null;
        /**
         * Estimated click-through rate of this inventory item.
         */
        estimatedClickThroughRate?: string | null;
        /**
         * Estimated conversion rate of this inventory item.
         */
        estimatedConversionRate?: string | null;
        /**
         * ID of this inventory item.
         */
        id?: string | null;
        /**
         * Whether this inventory item is in plan.
         */
        inPlan?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this inventory item.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.
         */
        name?: string | null;
        /**
         * Negotiation channel ID of this inventory item.
         */
        negotiationChannelId?: string | null;
        /**
         * Order ID of this inventory item.
         */
        orderId?: string | null;
        /**
         * Placement strategy ID of this inventory item.
         */
        placementStrategyId?: string | null;
        /**
         * Pricing of this inventory item.
         */
        pricing?: Schema$Pricing;
        /**
         * Project ID of this inventory item.
         */
        projectId?: string | null;
        /**
         * RFP ID of this inventory item.
         */
        rfpId?: string | null;
        /**
         * ID of the site this inventory item is associated with.
         */
        siteId?: string | null;
        /**
         * Subaccount ID of this inventory item.
         */
        subaccountId?: string | null;
        /**
         * Type of inventory item.
         */
        type?: string | null;
    }
    /**
     * Inventory item List Response
     */
    export interface Schema$InventoryItemsListResponse {
        /**
         * Inventory item collection
         */
        inventoryItems?: Schema$InventoryItem[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Contains information about a single invoice
     */
    export interface Schema$Invoice {
        /**
         * The list of summarized campaign information associated with this invoice.
         */
        campaign_summaries?: Schema$CampaignSummary[];
        /**
         * The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*.
         */
        correctedInvoiceId?: string | null;
        /**
         * Invoice currency code in ISO 4217 format.
         */
        currencyCode?: string | null;
        /**
         * The invoice due date.
         */
        dueDate?: string | null;
        /**
         * ID of this invoice.
         */
        id?: string | null;
        /**
         * The type of invoice document.
         */
        invoiceType?: string | null;
        /**
         * The date when the invoice was issued.
         */
        issueDate?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice".
         */
        kind?: string | null;
        /**
         * The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*.
         */
        paymentsAccountId?: string | null;
        /**
         * The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*.
         */
        paymentsProfileId?: string | null;
        /**
         * The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called.
         */
        pdfUrl?: string | null;
        /**
         * Purchase order number associated with the invoice.
         */
        purchaseOrderNumber?: string | null;
        /**
         * The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice.
         */
        replacedInvoiceIds?: string[] | null;
        /**
         * The invoice service end date.
         */
        serviceEndDate?: string | null;
        /**
         * The invoice service start date.
         */
        serviceStartDate?: string | null;
        /**
         * The pre-tax subtotal amount, in micros of the invoice's currency.
         */
        subtotalAmountMicros?: string | null;
        /**
         * The invoice total amount, in micros of the invoice's currency.
         */
        totalAmountMicros?: string | null;
        /**
         * The sum of all taxes in invoice, in micros of the invoice's currency.
         */
        totalTaxAmountMicros?: string | null;
    }
    /**
     * Key Value Targeting Expression.
     */
    export interface Schema$KeyValueTargetingExpression {
        /**
         * Keyword expression being targeted by the ad.
         */
        expression?: string | null;
    }
    /**
     * Contains information about where a user's browser is taken after the user clicks an ad.
     */
    export interface Schema$LandingPage {
        /**
         * Advertiser ID of this landing page. This is a required field.
         */
        advertiserId?: string | null;
        /**
         * Whether this landing page has been archived.
         */
        archived?: boolean | null;
        /**
         * Links that will direct the user to a mobile app, if installed.
         */
        deepLinks?: Schema$DeepLink[];
        /**
         * ID of this landing page. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
         */
        kind?: string | null;
        /**
         * Name of this landing page. This is a required field. It must be less than 256 characters long.
         */
        name?: string | null;
        /**
         * URL of this landing page. This is a required field.
         */
        url?: string | null;
    }
    /**
     * Contains information about a language that can be targeted by ads.
     */
    export interface Schema$Language {
        /**
         * Language ID of this language. This is the ID used for targeting and generating reports.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".
         */
        kind?: string | null;
        /**
         * Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese.
         */
        languageCode?: string | null;
        /**
         * Name of this language.
         */
        name?: string | null;
    }
    /**
     * Language List Response
     */
    export interface Schema$LanguagesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
         */
        kind?: string | null;
        /**
         * Language collection.
         */
        languages?: Schema$Language[];
    }
    /**
     * Language Targeting.
     */
    export interface Schema$LanguageTargeting {
        /**
         * Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated.
         */
        languages?: Schema$Language[];
    }
    /**
     * Modification timestamp.
     */
    export interface Schema$LastModifiedInfo {
        /**
         * Timestamp of the last change in milliseconds since epoch.
         */
        time?: string | null;
    }
    /**
     * A group clause made up of list population terms representing constraints joined by ORs.
     */
    export interface Schema$ListPopulationClause {
        /**
         * Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
         */
        terms?: Schema$ListPopulationTerm[];
    }
    /**
     * Remarketing List Population Rule.
     */
    export interface Schema$ListPopulationRule {
        /**
         * Floodlight activity ID associated with this rule. This field can be left blank.
         */
        floodlightActivityId?: string | null;
        /**
         * Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
         */
        floodlightActivityName?: string | null;
        /**
         * Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.
         */
        listPopulationClauses?: Schema$ListPopulationClause[];
    }
    /**
     * Remarketing List Population Rule Term.
     */
    export interface Schema$ListPopulationTerm {
        /**
         * Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
         */
        contains?: boolean | null;
        /**
         * Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
         */
        negation?: boolean | null;
        /**
         * Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
         */
        operator?: string | null;
        /**
         * ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
         */
        remarketingListId?: string | null;
        /**
         * List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
         */
        type?: string | null;
        /**
         * Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
         */
        value?: string | null;
        /**
         * Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.
         */
        variableFriendlyName?: string | null;
        /**
         * Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.
         */
        variableName?: string | null;
    }
    /**
     * Remarketing List Targeting Expression.
     */
    export interface Schema$ListTargetingExpression {
        /**
         * Expression describing which lists are being targeted by the ad.
         */
        expression?: string | null;
    }
    /**
     * Lookback configuration settings.
     */
    export interface Schema$LookbackConfiguration {
        /**
         * Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
         */
        clickDuration?: number | null;
        /**
         * Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
         */
        postImpressionActivitiesDuration?: number | null;
    }
    export interface Schema$MeasurementPartnerAdvertiserLink {
        /**
         * Status of the partner link.
         */
        linkStatus?: string | null;
        /**
         * Measurement partner used for tag wrapping.
         */
        measurementPartner?: string | null;
        /**
         * partner Advertiser Id.
         */
        partnerAdvertiserId?: string | null;
    }
    export interface Schema$MeasurementPartnerCampaignLink {
        /**
         * .
         */
        linkStatus?: string | null;
        /**
         * Measurement partner used for tag wrapping.
         */
        measurementPartner?: string | null;
        /**
         * Partner campaign ID needed for establishing linking with Measurement partner.
         */
        partnerCampaignId?: string | null;
    }
    /**
     * Placement tag wrapping
     */
    export interface Schema$MeasurementPartnerWrappingData {
        /**
         * Placement wrapping status.
         */
        linkStatus?: string | null;
        /**
         * Measurement partner used for wrapping the placement.
         */
        measurementPartner?: string | null;
        /**
         * Measurement mode for the wrapped placement.
         */
        tagWrappingMode?: string | null;
        /**
         * Tag provided by the measurement partner during wrapping.
         */
        wrappedTag?: string | null;
    }
    /**
     * Represents a metric.
     */
    export interface Schema$Metric {
        /**
         * The kind of resource this is, in this case dfareporting#metric.
         */
        kind?: string | null;
        /**
         * The metric name, e.g. impressions
         */
        name?: string | null;
    }
    /**
     * Contains information about a metro region that can be targeted by ads.
     */
    export interface Schema$Metro {
        /**
         * Country code of the country to which this metro region belongs.
         */
        countryCode?: string | null;
        /**
         * DART ID of the country to which this metro region belongs.
         */
        countryDartId?: string | null;
        /**
         * DART ID of this metro region.
         */
        dartId?: string | null;
        /**
         * DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
         */
        dmaId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
         */
        kind?: string | null;
        /**
         * Metro code of this metro region. This is equivalent to dma_id.
         */
        metroCode?: string | null;
        /**
         * Name of this metro region.
         */
        name?: string | null;
    }
    /**
     * Metro List Response
     */
    export interface Schema$MetrosListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
         */
        kind?: string | null;
        /**
         * Metro collection.
         */
        metros?: Schema$Metro[];
    }
    /**
     * Contains information about a mobile app. Used as a landing page deep link.
     */
    export interface Schema$MobileApp {
        /**
         * Mobile app directory.
         */
        directory?: string | null;
        /**
         * ID of this mobile app.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp".
         */
        kind?: string | null;
        /**
         * Publisher name.
         */
        publisherName?: string | null;
        /**
         * Title of this mobile app.
         */
        title?: string | null;
    }
    /**
     * Mobile app List Response
     */
    export interface Schema$MobileAppsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse".
         */
        kind?: string | null;
        /**
         * Mobile apps collection.
         */
        mobileApps?: Schema$MobileApp[];
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
    }
    /**
     * Contains information about a mobile carrier that can be targeted by ads.
     */
    export interface Schema$MobileCarrier {
        /**
         * Country code of the country to which this mobile carrier belongs.
         */
        countryCode?: string | null;
        /**
         * DART ID of the country to which this mobile carrier belongs.
         */
        countryDartId?: string | null;
        /**
         * ID of this mobile carrier.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
         */
        kind?: string | null;
        /**
         * Name of this mobile carrier.
         */
        name?: string | null;
    }
    /**
     * Mobile Carrier List Response
     */
    export interface Schema$MobileCarriersListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
         */
        kind?: string | null;
        /**
         * Mobile carrier collection.
         */
        mobileCarriers?: Schema$MobileCarrier[];
    }
    /**
     * Online Behavioral Advertiser icon.
     */
    export interface Schema$ObaIcon {
        /**
         * URL to redirect to when an OBA icon is clicked.
         */
        iconClickThroughUrl?: string | null;
        /**
         * URL to track click when an OBA icon is clicked.
         */
        iconClickTrackingUrl?: string | null;
        /**
         * URL to track view when an OBA icon is clicked.
         */
        iconViewTrackingUrl?: string | null;
        /**
         * Identifies the industry initiative that the icon supports. For example, AdChoices.
         */
        program?: string | null;
        /**
         * OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
         */
        resourceUrl?: string | null;
        /**
         * OBA icon size.
         */
        size?: Schema$Size;
        /**
         * OBA icon x coordinate position. Accepted values are left or right.
         */
        xPosition?: string | null;
        /**
         * OBA icon y coordinate position. Accepted values are top or bottom.
         */
        yPosition?: string | null;
    }
    /**
     * Object Filter.
     */
    export interface Schema$ObjectFilter {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
         */
        kind?: string | null;
        /**
         * Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
         */
        objectIds?: string[] | null;
        /**
         * Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
         */
        status?: string | null;
    }
    /**
     * Identify a user by name and address.
     */
    export interface Schema$OfflineUserAddressInfo {
        /**
         * City of the address.
         */
        city?: string | null;
        /**
         * 2-letter country code in ISO-3166-1 alpha-2 of the user's address.
         */
        countryCode?: string | null;
        /**
         * First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between).
         */
        hashedFirstName?: string | null;
        /**
         * Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation).
         */
        hashedLastName?: string | null;
        /**
         * The street address of the user hashed using SHA-256 hash function after normalization (lower case only).
         */
        hashedStreetAddress?: string | null;
        /**
         * Postal code of the user's address.
         */
        postalCode?: string | null;
        /**
         * State code of the address.
         */
        state?: string | null;
    }
    /**
     * Offset Position.
     */
    export interface Schema$OffsetPosition {
        /**
         * Offset distance from left side of an asset or a window.
         */
        left?: number | null;
        /**
         * Offset distance from top side of an asset or a window.
         */
        top?: number | null;
    }
    /**
     * Omniture Integration Settings.
     */
    export interface Schema$OmnitureSettings {
        /**
         * Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
         */
        omnitureCostDataEnabled?: boolean | null;
        /**
         * Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.
         */
        omnitureIntegrationEnabled?: boolean | null;
    }
    /**
     * Contains information about an operating system that can be targeted by ads.
     */
    export interface Schema$OperatingSystem {
        /**
         * DART ID of this operating system. This is the ID used for targeting.
         */
        dartId?: string | null;
        /**
         * Whether this operating system is for desktop.
         */
        desktop?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
         */
        kind?: string | null;
        /**
         * Whether this operating system is for mobile.
         */
        mobile?: boolean | null;
        /**
         * Name of this operating system.
         */
        name?: string | null;
    }
    /**
     * Operating System List Response
     */
    export interface Schema$OperatingSystemsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
         */
        kind?: string | null;
        /**
         * Operating system collection.
         */
        operatingSystems?: Schema$OperatingSystem[];
    }
    /**
     * Contains information about a particular version of an operating system that can be targeted by ads.
     */
    export interface Schema$OperatingSystemVersion {
        /**
         * ID of this operating system version.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
         */
        kind?: string | null;
        /**
         * Major version (leftmost number) of this operating system version.
         */
        majorVersion?: string | null;
        /**
         * Minor version (number after the first dot) of this operating system version.
         */
        minorVersion?: string | null;
        /**
         * Name of this operating system version.
         */
        name?: string | null;
        /**
         * Operating system of this operating system version.
         */
        operatingSystem?: Schema$OperatingSystem;
    }
    /**
     * Operating System Version List Response
     */
    export interface Schema$OperatingSystemVersionsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
         */
        kind?: string | null;
        /**
         * Operating system version collection.
         */
        operatingSystemVersions?: Schema$OperatingSystemVersion[];
    }
    /**
     * Creative optimization activity.
     */
    export interface Schema$OptimizationActivity {
        /**
         * Floodlight activity ID of this optimization activity. This is a required field.
         */
        floodlightActivityId?: string | null;
        /**
         * Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.
         */
        floodlightActivityIdDimensionValue?: Schema$DimensionValue;
        /**
         * Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1.
         */
        weight?: number | null;
    }
    /**
     * Describes properties of a Planning order.
     */
    export interface Schema$Order {
        /**
         * Account ID of this order.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this order.
         */
        advertiserId?: string | null;
        /**
         * IDs for users that have to approve documents created for this order.
         */
        approverUserProfileIds?: string[] | null;
        /**
         * Buyer invoice ID associated with this order.
         */
        buyerInvoiceId?: string | null;
        /**
         * Name of the buyer organization.
         */
        buyerOrganizationName?: string | null;
        /**
         * Comments in this order.
         */
        comments?: string | null;
        /**
         * Contacts for this order.
         */
        contacts?: Schema$OrderContact[];
        /**
         * ID of this order. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this order.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Name of this order.
         */
        name?: string | null;
        /**
         * Notes of this order.
         */
        notes?: string | null;
        /**
         * ID of the terms and conditions template used in this order.
         */
        planningTermId?: string | null;
        /**
         * Project ID of this order.
         */
        projectId?: string | null;
        /**
         * Seller order ID associated with this order.
         */
        sellerOrderId?: string | null;
        /**
         * Name of the seller organization.
         */
        sellerOrganizationName?: string | null;
        /**
         * Site IDs this order is associated with.
         */
        siteId?: string[] | null;
        /**
         * Free-form site names this order is associated with.
         */
        siteNames?: string[] | null;
        /**
         * Subaccount ID of this order.
         */
        subaccountId?: string | null;
        /**
         * Terms and conditions of this order.
         */
        termsAndConditions?: string | null;
    }
    /**
     * Contact of an order.
     */
    export interface Schema$OrderContact {
        /**
         * Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.
         */
        contactInfo?: string | null;
        /**
         * Name of this contact.
         */
        contactName?: string | null;
        /**
         * Title of this contact.
         */
        contactTitle?: string | null;
        /**
         * Type of this contact.
         */
        contactType?: string | null;
        /**
         * ID of the user profile containing the signature that will be embedded into order documents.
         */
        signatureUserProfileId?: string | null;
    }
    /**
     * Order List Response
     */
    export interface Schema$OrdersListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Order collection.
         */
        orders?: Schema$Order[];
    }
    /**
     * Represents a DfaReporting path filter.
     */
    export interface Schema$PathFilter {
        /**
         * Event filters in path report.
         */
        eventFilters?: Schema$EventFilter[];
        /**
         * The kind of resource this is, in this case dfareporting#pathFilter.
         */
        kind?: string | null;
        /**
         * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
         */
        pathMatchPosition?: string | null;
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "PATH".
     */
    export interface Schema$PathReportCompatibleFields {
        /**
         * Dimensions which are compatible to be selected in the "channelGroupings" section of the report.
         */
        channelGroupings?: Schema$Dimension[];
        /**
         * Dimensions which are compatible to be selected in the "dimensions" section of the report.
         */
        dimensions?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#pathReportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
        /**
         * Dimensions which are compatible to be selected in the "pathFilters" section of the report.
         */
        pathFilters?: Schema$Dimension[];
    }
    /**
     * Represents a PathReportDimensionValue resource.
     */
    export interface Schema$PathReportDimensionValue {
        /**
         * The name of the dimension.
         */
        dimensionName?: string | null;
        /**
         * The possible ID's associated with the value if available.
         */
        ids?: string[] | null;
        /**
         * The kind of resource this is, in this case dfareporting#pathReportDimensionValue.
         */
        kind?: string | null;
        /**
         * Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
         */
        matchType?: string | null;
        /**
         * The possible values of the dimension.
         */
        values?: string[] | null;
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
     */
    export interface Schema$PathToConversionReportCompatibleFields {
        /**
         * Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
         */
        conversionDimensions?: Schema$Dimension[];
        /**
         * Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.
         */
        customFloodlightVariables?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
        /**
         * Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
         */
        perInteractionDimensions?: Schema$Dimension[];
    }
    /**
     * Contains properties of a placement.
     */
    export interface Schema$Placement {
        /**
         * Account ID of this placement. This field can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this placement is active, inactive, archived or permanently archived.
         */
        activeStatus?: string | null;
        /**
         * Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.
         */
        adBlockingOptOut?: boolean | null;
        /**
         * Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
         */
        additionalSizes?: Schema$Size[];
        /**
         * Advertiser ID of this placement. This field can be left blank.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Campaign ID of this placement. This field is a required field on insertion.
         */
        campaignId?: string | null;
        /**
         * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
         */
        campaignIdDimensionValue?: Schema$DimensionValue;
        /**
         * Comments for this placement.
         */
        comment?: string | null;
        /**
         * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
         */
        compatibility?: string | null;
        /**
         * ID of the content category assigned to this placement.
         */
        contentCategoryId?: string | null;
        /**
         * Optional. Conversion domain overrides for a placement.
         */
        conversionDomainOverride?: Schema$PlacementConversionDomainOverride;
        /**
         * Information about the creation of this placement. This is a read-only field.
         */
        createInfo?: Schema$LastModifiedInfo;
        /**
         * Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
         */
        directorySiteId?: string | null;
        /**
         * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
         */
        directorySiteIdDimensionValue?: Schema$DimensionValue;
        /**
         * External ID for this placement.
         */
        externalId?: string | null;
        /**
         * ID of this placement. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this placement. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Key name of this placement. This is a read-only, auto-generated field.
         */
        keyName?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this placement. This is a read-only field.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Lookback window settings for this placement.
         */
        lookbackConfiguration?: Schema$LookbackConfiguration;
        /**
         * Name of this placement.This is a required field and must be less than or equal to 512 characters long.
         */
        name?: string | null;
        /**
         * Measurement partner provided settings for a wrapped placement.
         */
        partnerWrappingData?: Schema$MeasurementPartnerWrappingData;
        /**
         * Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
         */
        paymentApproved?: boolean | null;
        /**
         * Payment source for this placement. This is a required field that is read-only after insertion.
         */
        paymentSource?: string | null;
        /**
         * ID of this placement's group, if applicable.
         */
        placementGroupId?: string | null;
        /**
         * Dimension value for the ID of the placement group. This is a read-only, auto-generated field.
         */
        placementGroupIdDimensionValue?: Schema$DimensionValue;
        /**
         * ID of the placement strategy assigned to this placement.
         */
        placementStrategyId?: string | null;
        /**
         * Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType.
         */
        pricingSchedule?: Schema$PricingSchedule;
        /**
         * Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
         */
        primary?: boolean | null;
        /**
         * Information about the last publisher update. This is a read-only field.
         */
        publisherUpdateInfo?: Schema$LastModifiedInfo;
        /**
         * Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
         */
        siteId?: string | null;
        /**
         * Dimension value for the ID of the site. This is a read-only, auto-generated field.
         */
        siteIdDimensionValue?: Schema$DimensionValue;
        /**
         * Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion.
         */
        size?: Schema$Size;
        /**
         * Whether creatives assigned to this placement must be SSL-compliant.
         */
        sslRequired?: boolean | null;
        /**
         * Third-party placement status.
         */
        status?: string | null;
        /**
         * Subaccount ID of this placement. This field can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
         */
        tagFormats?: string[] | null;
        /**
         * Tag settings for this placement.
         */
        tagSetting?: Schema$TagSetting;
        /**
         * Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.
         */
        videoActiveViewOptOut?: boolean | null;
        /**
         * A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility.
         */
        videoSettings?: Schema$VideoSettings;
        /**
         * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
         */
        vpaidAdapterChoice?: string | null;
        /**
         * Whether this placement opts out of tag wrapping.
         */
        wrappingOptOut?: boolean | null;
    }
    /**
     * Placement Assignment.
     */
    export interface Schema$PlacementAssignment {
        /**
         * Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
         */
        active?: boolean | null;
        /**
         * ID of the placement to be assigned. This is a required field.
         */
        placementId?: string | null;
        /**
         * Dimension value for the ID of the placement. This is a read-only, auto-generated field.
         */
        placementIdDimensionValue?: Schema$DimensionValue;
        /**
         * Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
         */
        sslRequired?: boolean | null;
    }
    export interface Schema$PlacementConversionDomainOverride {
        conversionDomains?: Schema$PlacementSingleConversionDomain[];
    }
    /**
     * Contains properties of a package or roadblock.
     */
    export interface Schema$PlacementGroup {
        /**
         * Account ID of this placement group. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this placement group is active, inactive, archived or permanently archived.
         */
        activeStatus?: string | null;
        /**
         * Advertiser ID of this placement group. This is a required field on insertion.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Campaign ID of this placement group. This field is required on insertion.
         */
        campaignId?: string | null;
        /**
         * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
         */
        campaignIdDimensionValue?: Schema$DimensionValue;
        /**
         * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
         */
        childPlacementIds?: string[] | null;
        /**
         * Comments for this placement group.
         */
        comment?: string | null;
        /**
         * ID of the content category assigned to this placement group.
         */
        contentCategoryId?: string | null;
        /**
         * Information about the creation of this placement group. This is a read-only field.
         */
        createInfo?: Schema$LastModifiedInfo;
        /**
         * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
         */
        directorySiteId?: string | null;
        /**
         * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
         */
        directorySiteIdDimensionValue?: Schema$DimensionValue;
        /**
         * External ID for this placement.
         */
        externalId?: string | null;
        /**
         * ID of this placement group. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this placement group. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this placement group. This is a read-only field.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Name of this placement group. This is a required field and must be less than 256 characters long.
         */
        name?: string | null;
        /**
         * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
         */
        placementGroupType?: string | null;
        /**
         * ID of the placement strategy assigned to this placement group.
         */
        placementStrategyId?: string | null;
        /**
         * Pricing schedule of this placement group. This field is required on insertion.
         */
        pricingSchedule?: Schema$PricingSchedule;
        /**
         * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
         */
        primaryPlacementId?: string | null;
        /**
         * Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.
         */
        primaryPlacementIdDimensionValue?: Schema$DimensionValue;
        /**
         * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
         */
        siteId?: string | null;
        /**
         * Dimension value for the ID of the site. This is a read-only, auto-generated field.
         */
        siteIdDimensionValue?: Schema$DimensionValue;
        /**
         * Subaccount ID of this placement group. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
    }
    /**
     * Placement Group List Response
     */
    export interface Schema$PlacementGroupsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Placement group collection.
         */
        placementGroups?: Schema$PlacementGroup[];
    }
    /**
     * Placement GenerateTags Response
     */
    export interface Schema$PlacementsGenerateTagsResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
         */
        kind?: string | null;
        /**
         * Set of generated tags for the specified placements.
         */
        placementTags?: Schema$PlacementTag[];
    }
    export interface Schema$PlacementSingleConversionDomain {
        conversionDomainId?: string | null;
        conversionDomainValue?: string | null;
    }
    /**
     * Placement List Response
     */
    export interface Schema$PlacementsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Placement collection.
         */
        placements?: Schema$Placement[];
    }
    /**
     * Placement Strategy List Response
     */
    export interface Schema$PlacementStrategiesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Placement strategy collection.
         */
        placementStrategies?: Schema$PlacementStrategy[];
    }
    /**
     * Contains properties of a placement strategy.
     */
    export interface Schema$PlacementStrategy {
        /**
         * Account ID of this placement strategy.This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * ID of this placement strategy. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
         */
        kind?: string | null;
        /**
         * Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.
         */
        name?: string | null;
    }
    /**
     * Placement Tag
     */
    export interface Schema$PlacementTag {
        /**
         * Placement ID
         */
        placementId?: string | null;
        /**
         * Tags generated for this placement.
         */
        tagDatas?: Schema$TagData[];
    }
    /**
     * Contains information about a platform type that can be targeted by ads.
     */
    export interface Schema$PlatformType {
        /**
         * ID of this platform type.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".
         */
        kind?: string | null;
        /**
         * Name of this platform type.
         */
        name?: string | null;
    }
    /**
     * Platform Type List Response
     */
    export interface Schema$PlatformTypesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
         */
        kind?: string | null;
        /**
         * Platform type collection.
         */
        platformTypes?: Schema$PlatformType[];
    }
    /**
     * Popup Window Properties.
     */
    export interface Schema$PopupWindowProperties {
        /**
         * Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID
         */
        dimension?: Schema$Size;
        /**
         * Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
         */
        offset?: Schema$OffsetPosition;
        /**
         * Popup window position either centered or at specific coordinate.
         */
        positionType?: string | null;
        /**
         * Whether to display the browser address bar.
         */
        showAddressBar?: boolean | null;
        /**
         * Whether to display the browser menu bar.
         */
        showMenuBar?: boolean | null;
        /**
         * Whether to display the browser scroll bar.
         */
        showScrollBar?: boolean | null;
        /**
         * Whether to display the browser status bar.
         */
        showStatusBar?: boolean | null;
        /**
         * Whether to display the browser tool bar.
         */
        showToolBar?: boolean | null;
        /**
         * Title of popup window.
         */
        title?: string | null;
    }
    /**
     * Contains information about a postal code that can be targeted by ads.
     */
    export interface Schema$PostalCode {
        /**
         * Postal code. This is equivalent to the id field.
         */
        code?: string | null;
        /**
         * Country code of the country to which this postal code belongs.
         */
        countryCode?: string | null;
        /**
         * DART ID of the country to which this postal code belongs.
         */
        countryDartId?: string | null;
        /**
         * ID of this postal code.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".
         */
        kind?: string | null;
    }
    /**
     * Postal Code List Response
     */
    export interface Schema$PostalCodesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
         */
        kind?: string | null;
        /**
         * Postal code collection.
         */
        postalCodes?: Schema$PostalCode[];
    }
    export interface Schema$Pricing {
        /**
         * Cap cost type of this inventory item.
         */
        capCostType?: string | null;
        endDate?: string | null;
        /**
         * Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
         */
        flights?: Schema$Flight[];
        /**
         * Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
         */
        groupType?: string | null;
        /**
         * Pricing type of this inventory item.
         */
        pricingType?: string | null;
        startDate?: string | null;
    }
    /**
     * Pricing Schedule
     */
    export interface Schema$PricingSchedule {
        /**
         * Placement cap cost option.
         */
        capCostOption?: string | null;
        endDate?: string | null;
        /**
         * Whether this placement is flighted. If true, pricing periods will be computed automatically.
         */
        flighted?: boolean | null;
        /**
         * Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
         */
        floodlightActivityId?: string | null;
        /**
         * Pricing periods for this placement.
         */
        pricingPeriods?: Schema$PricingSchedulePricingPeriod[];
        /**
         * Placement pricing type. This field is required on insertion.
         */
        pricingType?: string | null;
        startDate?: string | null;
        testingStartDate?: string | null;
    }
    /**
     * Pricing Period
     */
    export interface Schema$PricingSchedulePricingPeriod {
        endDate?: string | null;
        /**
         * Comments for this pricing period.
         */
        pricingComment?: string | null;
        /**
         * Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.
         */
        rateOrCostNanos?: string | null;
        startDate?: string | null;
        /**
         * Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.
         */
        units?: string | null;
    }
    /**
     * Contains properties of a Planning project.
     */
    export interface Schema$Project {
        /**
         * Account ID of this project.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this project.
         */
        advertiserId?: string | null;
        /**
         * Audience age group of this project.
         */
        audienceAgeGroup?: string | null;
        /**
         * Audience gender of this project.
         */
        audienceGender?: string | null;
        /**
         * Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.
         */
        budget?: string | null;
        /**
         * Client billing code of this project.
         */
        clientBillingCode?: string | null;
        /**
         * Name of the project client.
         */
        clientName?: string | null;
        endDate?: string | null;
        /**
         * ID of this project. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
         */
        kind?: string | null;
        /**
         * Information about the most recent modification of this project.
         */
        lastModifiedInfo?: Schema$LastModifiedInfo;
        /**
         * Name of this project.
         */
        name?: string | null;
        /**
         * Overview of this project.
         */
        overview?: string | null;
        startDate?: string | null;
        /**
         * Subaccount ID of this project.
         */
        subaccountId?: string | null;
        /**
         * Number of clicks that the advertiser is targeting.
         */
        targetClicks?: string | null;
        /**
         * Number of conversions that the advertiser is targeting.
         */
        targetConversions?: string | null;
        /**
         * CPA that the advertiser is targeting.
         */
        targetCpaNanos?: string | null;
        /**
         * CPC that the advertiser is targeting.
         */
        targetCpcNanos?: string | null;
        /**
         * vCPM from Active View that the advertiser is targeting.
         */
        targetCpmActiveViewNanos?: string | null;
        /**
         * CPM that the advertiser is targeting.
         */
        targetCpmNanos?: string | null;
        /**
         * Number of impressions that the advertiser is targeting.
         */
        targetImpressions?: string | null;
    }
    /**
     * Project List Response
     */
    export interface Schema$ProjectsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Project collection.
         */
        projects?: Schema$Project[];
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "REACH".
     */
    export interface Schema$ReachReportCompatibleFields {
        /**
         * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
         */
        dimensionFilters?: Schema$Dimension[];
        /**
         * Dimensions which are compatible to be selected in the "dimensions" section of the report.
         */
        dimensions?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
        /**
         * Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
         */
        pivotedActivityMetrics?: Schema$Metric[];
        /**
         * Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
         */
        reachByFrequencyMetrics?: Schema$Metric[];
    }
    /**
     * Represents a recipient.
     */
    export interface Schema$Recipient {
        /**
         * The delivery type for the recipient.
         */
        deliveryType?: string | null;
        /**
         * The email address of the recipient.
         */
        email?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#recipient.
         */
        kind?: string | null;
    }
    /**
     * Contains information about a region that can be targeted by ads.
     */
    export interface Schema$Region {
        /**
         * Country code of the country to which this region belongs.
         */
        countryCode?: string | null;
        /**
         * DART ID of the country to which this region belongs.
         */
        countryDartId?: string | null;
        /**
         * DART ID of this region.
         */
        dartId?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
         */
        kind?: string | null;
        /**
         * Name of this region.
         */
        name?: string | null;
        /**
         * Region code.
         */
        regionCode?: string | null;
    }
    /**
     * Region List Response
     */
    export interface Schema$RegionsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
         */
        kind?: string | null;
        /**
         * Region collection.
         */
        regions?: Schema$Region[];
    }
    /**
     * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
     */
    export interface Schema$RemarketingList {
        /**
         * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
         */
        accountId?: string | null;
        /**
         * Whether this remarketing list is active.
         */
        active?: boolean | null;
        /**
         * Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Remarketing list description.
         */
        description?: string | null;
        /**
         * Remarketing list ID. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
         */
        kind?: string | null;
        /**
         * Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.
         */
        lifeSpan?: string | null;
        /**
         * Rule used to populate the remarketing list with users.
         */
        listPopulationRule?: Schema$ListPopulationRule;
        /**
         * Number of users currently in the list. This is a read-only field.
         */
        listSize?: string | null;
        /**
         * Product from which this remarketing list was originated.
         */
        listSource?: string | null;
        /**
         * Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
         */
        name?: string | null;
        /**
         * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
         */
        subaccountId?: string | null;
    }
    /**
     * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
     */
    export interface Schema$RemarketingListShare {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
         */
        kind?: string | null;
        /**
         * Remarketing list ID. This is a read-only, auto-generated field.
         */
        remarketingListId?: string | null;
        /**
         * Accounts that the remarketing list is shared with.
         */
        sharedAccountIds?: string[] | null;
        /**
         * Advertisers that the remarketing list is shared with.
         */
        sharedAdvertiserIds?: string[] | null;
    }
    /**
     * Remarketing list response
     */
    export interface Schema$RemarketingListsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Remarketing list collection.
         */
        remarketingLists?: Schema$RemarketingList[];
    }
    /**
     * Represents a Report resource.
     */
    export interface Schema$Report {
        /**
         * The account ID to which this report belongs.
         */
        accountId?: string | null;
        /**
         * The report criteria for a report of type "STANDARD".
         */
        criteria?: {
            activities?: Schema$Activities;
            customRichMediaEvents?: Schema$CustomRichMediaEvents;
            dateRange?: Schema$DateRange;
            dimensionFilters?: Schema$DimensionValue[];
            dimensions?: Schema$SortedDimension[];
            metricNames?: string[];
        } | null;
        /**
         * The report criteria for a report of type "CROSS_DIMENSION_REACH".
         */
        crossDimensionReachCriteria?: {
            breakdown?: Schema$SortedDimension[];
            dateRange?: Schema$DateRange;
            dimension?: string;
            dimensionFilters?: Schema$DimensionValue[];
            metricNames?: string[];
            overlapMetricNames?: string[];
            pivoted?: boolean;
        } | null;
        /**
         * The report's email delivery settings.
         */
        delivery?: {
            emailOwner?: boolean;
            emailOwnerDeliveryType?: string;
            message?: string;
            recipients?: Schema$Recipient[];
        } | null;
        /**
         * The eTag of this response for caching purposes.
         */
        etag?: string | null;
        /**
         * The filename used when generating report files for this report.
         */
        fileName?: string | null;
        /**
         * The report criteria for a report of type "FLOODLIGHT".
         */
        floodlightCriteria?: {
            customRichMediaEvents?: Schema$DimensionValue[];
            dateRange?: Schema$DateRange;
            dimensionFilters?: Schema$DimensionValue[];
            dimensions?: Schema$SortedDimension[];
            floodlightConfigId?: Schema$DimensionValue;
            metricNames?: string[];
            reportProperties?: {
                includeAttributedIPConversions?: boolean;
                includeUnattributedCookieConversions?: boolean;
                includeUnattributedIPConversions?: boolean;
            };
        } | null;
        /**
         * The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
         */
        format?: string | null;
        /**
         * The unique ID identifying this report resource.
         */
        id?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#report.
         */
        kind?: string | null;
        /**
         * The timestamp (in milliseconds since epoch) of when this report was last modified.
         */
        lastModifiedTime?: string | null;
        /**
         * The name of the report.
         */
        name?: string | null;
        /**
         * The user profile id of the owner of this report.
         */
        ownerProfileId?: string | null;
        /**
         * The report criteria for a report of type "PATH_ATTRIBUTION".
         */
        pathAttributionCriteria?: {
            activityFilters?: Schema$DimensionValue[];
            customChannelGrouping?: Schema$ChannelGrouping;
            dateRange?: Schema$DateRange;
            dimensions?: Schema$SortedDimension[];
            floodlightConfigId?: Schema$DimensionValue;
            metricNames?: string[];
            pathFilters?: Schema$PathFilter[];
        } | null;
        /**
         * The report criteria for a report of type "PATH".
         */
        pathCriteria?: {
            activityFilters?: Schema$DimensionValue[];
            customChannelGrouping?: Schema$ChannelGrouping;
            dateRange?: Schema$DateRange;
            dimensions?: Schema$SortedDimension[];
            floodlightConfigId?: Schema$DimensionValue;
            metricNames?: string[];
            pathFilters?: Schema$PathFilter[];
        } | null;
        /**
         * The report criteria for a report of type "PATH_TO_CONVERSION".
         */
        pathToConversionCriteria?: {
            activityFilters?: Schema$DimensionValue[];
            conversionDimensions?: Schema$SortedDimension[];
            customFloodlightVariables?: Schema$SortedDimension[];
            customRichMediaEvents?: Schema$DimensionValue[];
            dateRange?: Schema$DateRange;
            floodlightConfigId?: Schema$DimensionValue;
            metricNames?: string[];
            perInteractionDimensions?: Schema$SortedDimension[];
            reportProperties?: {
                clicksLookbackWindow?: number;
                impressionsLookbackWindow?: number;
                includeAttributedIPConversions?: boolean;
                includeUnattributedCookieConversions?: boolean;
                includeUnattributedIPConversions?: boolean;
                maximumClickInteractions?: number;
                maximumImpressionInteractions?: number;
                maximumInteractionGap?: number;
                pivotOnInteractionPath?: boolean;
            };
        } | null;
        /**
         * The report criteria for a report of type "REACH".
         */
        reachCriteria?: {
            activities?: Schema$Activities;
            customRichMediaEvents?: Schema$CustomRichMediaEvents;
            dateRange?: Schema$DateRange;
            dimensionFilters?: Schema$DimensionValue[];
            dimensions?: Schema$SortedDimension[];
            enableAllDimensionCombinations?: boolean;
            metricNames?: string[];
            reachByFrequencyMetricNames?: string[];
        } | null;
        /**
         * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
         */
        schedule?: {
            active?: boolean;
            every?: number;
            expirationDate?: string;
            repeats?: string;
            repeatsOnWeekDays?: string[];
            runsOnDayOfMonth?: string;
            startDate?: string;
            timezone?: string;
        } | null;
        /**
         * The subaccount ID to which this report belongs if applicable.
         */
        subAccountId?: string | null;
        /**
         * The type of the report.
         */
        type?: string | null;
    }
    /**
     * Represents fields that are compatible to be selected for a report of type "STANDARD".
     */
    export interface Schema$ReportCompatibleFields {
        /**
         * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
         */
        dimensionFilters?: Schema$Dimension[];
        /**
         * Dimensions which are compatible to be selected in the "dimensions" section of the report.
         */
        dimensions?: Schema$Dimension[];
        /**
         * The kind of resource this is, in this case dfareporting#reportCompatibleFields.
         */
        kind?: string | null;
        /**
         * Metrics which are compatible to be selected in the "metricNames" section of the report.
         */
        metrics?: Schema$Metric[];
        /**
         * Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
         */
        pivotedActivityMetrics?: Schema$Metric[];
    }
    /**
     * Represents the list of reports.
     */
    export interface Schema$ReportList {
        /**
         * The eTag of this response for caching purposes.
         */
        etag?: string | null;
        /**
         * The reports returned in this response.
         */
        items?: Schema$Report[];
        /**
         * The kind of list this is, in this case dfareporting#reportList.
         */
        kind?: string | null;
        /**
         * Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
         */
        nextPageToken?: string | null;
    }
    /**
     * Reporting Configuration
     */
    export interface Schema$ReportsConfiguration {
        /**
         * Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
         */
        exposureToConversionEnabled?: boolean | null;
        /**
         * Default lookback windows for new advertisers in this account.
         */
        lookbackConfiguration?: Schema$LookbackConfiguration;
        /**
         * Report generation time zone ID of this account. This is a required field that cannot be changed on update. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu"
         */
        reportGenerationTimeZoneId?: string | null;
    }
    /**
     * Rich Media Exit Override.
     */
    export interface Schema$RichMediaExitOverride {
        /**
         * Click-through URL of this rich media exit override. Applicable if the enabled field is set to true.
         */
        clickThroughUrl?: Schema$ClickThroughUrl;
        /**
         * Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
         */
        enabled?: boolean | null;
        /**
         * ID for the override to refer to a specific exit in the creative.
         */
        exitId?: string | null;
    }
    /**
     * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
     */
    export interface Schema$Rule {
        /**
         * A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
         */
        assetId?: string | null;
        /**
         * A user-friendly name for this rule. This is a required field.
         */
        name?: string | null;
        /**
         * A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field.
         */
        targetingTemplateId?: string | null;
    }
    /**
     * Contains properties of a site.
     */
    export interface Schema$Site {
        /**
         * Account ID of this site. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this site is approved.
         */
        approved?: boolean | null;
        /**
         * Directory site associated with this site. This is a required field that is read-only after insertion.
         */
        directorySiteId?: string | null;
        /**
         * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
         */
        directorySiteIdDimensionValue?: Schema$DimensionValue;
        /**
         * ID of this site. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Dimension value for the ID of this site. This is a read-only, auto-generated field.
         */
        idDimensionValue?: Schema$DimensionValue;
        /**
         * Key name of this site. This is a read-only, auto-generated field.
         */
        keyName?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
         */
        kind?: string | null;
        /**
         * Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
         */
        name?: string | null;
        /**
         * Site contacts.
         */
        siteContacts?: Schema$SiteContact[];
        /**
         * Site-wide settings.
         */
        siteSettings?: Schema$SiteSettings;
        /**
         * Subaccount ID of this site. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
        /**
         * Default video settings for new placements created under this site. This value will be used to populate the placements.videoSettings field, when no value is specified for the new placement.
         */
        videoSettings?: Schema$SiteVideoSettings;
    }
    /**
     * Companion Settings
     */
    export interface Schema$SiteCompanionSetting {
        /**
         * Whether companions are disabled for this site template.
         */
        companionsDisabled?: boolean | null;
        /**
         * Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes.
         */
        enabledSizes?: Schema$Size[];
        /**
         * Whether to serve only static images as companions.
         */
        imageOnly?: boolean | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting".
         */
        kind?: string | null;
    }
    /**
     * Site Contact
     */
    export interface Schema$SiteContact {
        /**
         * Address of this site contact.
         */
        address?: string | null;
        /**
         * Site contact type.
         */
        contactType?: string | null;
        /**
         * Email address of this site contact. This is a required field.
         */
        email?: string | null;
        /**
         * First name of this site contact.
         */
        firstName?: string | null;
        /**
         * ID of this site contact. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Last name of this site contact.
         */
        lastName?: string | null;
        /**
         * Primary phone number of this site contact.
         */
        phone?: string | null;
        /**
         * Title or designation of this site contact.
         */
        title?: string | null;
    }
    /**
     * Site Settings
     */
    export interface Schema$SiteSettings {
        /**
         * Whether active view creatives are disabled for this site.
         */
        activeViewOptOut?: boolean | null;
        /**
         * Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect.
         */
        adBlockingOptOut?: boolean | null;
        /**
         * Whether new cookies are disabled for this site.
         */
        disableNewCookie?: boolean | null;
        /**
         * Configuration settings for dynamic and image floodlight tags.
         */
        tagSetting?: Schema$TagSetting;
        /**
         * Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.
         */
        videoActiveViewOptOutTemplate?: boolean | null;
        /**
         * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
         */
        vpaidAdapterChoiceTemplate?: string | null;
    }
    /**
     * Skippable Settings
     */
    export interface Schema$SiteSkippableSetting {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".
         */
        kind?: string | null;
        /**
         * Amount of time to play videos served to this site template before counting a view. Applicable when skippable is true.
         */
        progressOffset?: Schema$VideoOffset;
        /**
         * Amount of time to play videos served to this site before the skip button should appear. Applicable when skippable is true.
         */
        skipOffset?: Schema$VideoOffset;
        /**
         * Whether the user can skip creatives served to this site. This will act as default for new placements created under this site.
         */
        skippable?: boolean | null;
    }
    /**
     * Site List Response
     */
    export interface Schema$SitesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Site collection.
         */
        sites?: Schema$Site[];
    }
    /**
     * Transcode Settings
     */
    export interface Schema$SiteTranscodeSetting {
        /**
         * Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats.
         */
        enabledVideoFormats?: number[] | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".
         */
        kind?: string | null;
    }
    /**
     * Video Settings
     */
    export interface Schema$SiteVideoSettings {
        /**
         * Settings for the companion creatives of video creatives served to this site.
         */
        companionSettings?: Schema$SiteCompanionSetting;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings".
         */
        kind?: string | null;
        /**
         * Whether OBA icons are enabled for this placement.
         */
        obaEnabled?: boolean | null;
        /**
         * Settings for the OBA icon of video creatives served to this site. This will act as default for new placements created under this site.
         */
        obaSettings?: Schema$ObaIcon;
        /**
         * Orientation of a site template used for video. This will act as default for new placements created under this site.
         */
        orientation?: string | null;
        /**
         * Publisher specification ID used to identify site-associated publisher requirements and automatically populate transcode settings. If publisher specification ID is specified, it will take precedence over transcode settings.
         */
        publisherSpecificationId?: string | null;
        /**
         * Settings for the skippability of video creatives served to this site. This will act as default for new placements created under this site.
         */
        skippableSettings?: Schema$SiteSkippableSetting;
        /**
         * Settings for the transcodes of video creatives served to this site. This will act as default for new placements created under this site.
         */
        transcodeSettings?: Schema$SiteTranscodeSetting;
    }
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    export interface Schema$Size {
        /**
         * Height of this size. Acceptable values are 0 to 32767, inclusive.
         */
        height?: number | null;
        /**
         * IAB standard size. This is a read-only, auto-generated field.
         */
        iab?: boolean | null;
        /**
         * ID of this size. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
         */
        kind?: string | null;
        /**
         * Width of this size. Acceptable values are 0 to 32767, inclusive.
         */
        width?: number | null;
    }
    /**
     * Size List Response
     */
    export interface Schema$SizesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
         */
        kind?: string | null;
        /**
         * Size collection.
         */
        sizes?: Schema$Size[];
    }
    /**
     * Skippable Settings
     */
    export interface Schema$SkippableSetting {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".
         */
        kind?: string | null;
        /**
         * Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true.
         */
        progressOffset?: Schema$VideoOffset;
        /**
         * Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true.
         */
        skipOffset?: Schema$VideoOffset;
        /**
         * Whether the user can skip creatives served to this placement.
         */
        skippable?: boolean | null;
    }
    /**
     * Represents a sorted dimension.
     */
    export interface Schema$SortedDimension {
        /**
         * The kind of resource this is, in this case dfareporting#sortedDimension.
         */
        kind?: string | null;
        /**
         * The name of the dimension.
         */
        name?: string | null;
        /**
         * An optional sort order for the dimension column.
         */
        sortOrder?: string | null;
    }
    /**
     * Contains properties of a Campaign Manager subaccount.
     */
    export interface Schema$Subaccount {
        /**
         * ID of the account that contains this subaccount. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * IDs of the available user role permissions for this subaccount.
         */
        availablePermissionIds?: string[] | null;
        /**
         * ID of this subaccount. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
         */
        kind?: string | null;
        /**
         * Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.
         */
        name?: string | null;
    }
    /**
     * Subaccount List Response
     */
    export interface Schema$SubaccountsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Subaccount collection.
         */
        subaccounts?: Schema$Subaccount[];
    }
    /**
     * Placement Tag Data
     */
    export interface Schema$TagData {
        /**
         * Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
         */
        adId?: string | null;
        /**
         * Tag string to record a click.
         */
        clickTag?: string | null;
        /**
         * Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
         */
        creativeId?: string | null;
        /**
         * TagData tag format of this tag.
         */
        format?: string | null;
        /**
         * Tag string for serving an ad.
         */
        impressionTag?: string | null;
    }
    /**
     * Tag Settings
     */
    export interface Schema$TagSetting {
        /**
         * Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
         */
        additionalKeyValues?: string | null;
        /**
         * Whether static landing page URLs should be included in the tags. New placements will default to the value set on their site.
         */
        includeClickThroughUrls?: boolean | null;
        /**
         * Whether click-tracking string should be included in the tags.
         */
        includeClickTracking?: boolean | null;
        /**
         * Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
         */
        keywordOption?: string | null;
    }
    /**
     * Dynamic and Image Tag Settings.
     */
    export interface Schema$TagSettings {
        /**
         * Whether dynamic floodlight tags are enabled.
         */
        dynamicTagEnabled?: boolean | null;
        /**
         * Whether image tags are enabled.
         */
        imageTagEnabled?: boolean | null;
    }
    /**
     * Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to facilitate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
     */
    export interface Schema$TargetableRemarketingList {
        /**
         * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
         */
        accountId?: string | null;
        /**
         * Whether this targetable remarketing list is active.
         */
        active?: boolean | null;
        /**
         * Dimension value for the advertiser ID that owns this targetable remarketing list.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Targetable remarketing list description.
         */
        description?: string | null;
        /**
         * Targetable remarketing list ID.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
         */
        kind?: string | null;
        /**
         * Number of days that a user should remain in the targetable remarketing list without an impression.
         */
        lifeSpan?: string | null;
        /**
         * Number of users currently in the list. This is a read-only field.
         */
        listSize?: string | null;
        /**
         * Product from which this targetable remarketing list was originated.
         */
        listSource?: string | null;
        /**
         * Name of the targetable remarketing list. Is no greater than 128 characters long.
         */
        name?: string | null;
        /**
         * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
         */
        subaccountId?: string | null;
    }
    /**
     * Targetable remarketing list response
     */
    export interface Schema$TargetableRemarketingListsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Targetable remarketing list collection.
         */
        targetableRemarketingLists?: Schema$TargetableRemarketingList[];
    }
    /**
     * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
     */
    export interface Schema$TargetingTemplate {
        /**
         * Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
         */
        accountId?: string | null;
        /**
         * Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
         */
        advertiserId?: string | null;
        /**
         * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
         */
        advertiserIdDimensionValue?: Schema$DimensionValue;
        /**
         * Time and day targeting criteria.
         */
        dayPartTargeting?: Schema$DayPartTargeting;
        /**
         * Geographical targeting criteria.
         */
        geoTargeting?: Schema$GeoTargeting;
        /**
         * ID of this targeting template. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Key-value targeting criteria.
         */
        keyValueTargetingExpression?: Schema$KeyValueTargetingExpression;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".
         */
        kind?: string | null;
        /**
         * Language targeting criteria.
         */
        languageTargeting?: Schema$LanguageTargeting;
        /**
         * Remarketing list targeting criteria.
         */
        listTargetingExpression?: Schema$ListTargetingExpression;
        /**
         * Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.
         */
        name?: string | null;
        /**
         * Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
         */
        subaccountId?: string | null;
        /**
         * Technology platform targeting criteria.
         */
        technologyTargeting?: Schema$TechnologyTargeting;
    }
    /**
     * Targeting Template List Response
     */
    export interface Schema$TargetingTemplatesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * Targeting template collection.
         */
        targetingTemplates?: Schema$TargetingTemplate[];
    }
    /**
     * Target Window.
     */
    export interface Schema$TargetWindow {
        /**
         * User-entered value.
         */
        customHtml?: string | null;
        /**
         * Type of browser window for which the backup image of the flash creative can be displayed.
         */
        targetWindowOption?: string | null;
    }
    /**
     * Technology Targeting.
     */
    export interface Schema$TechnologyTargeting {
        /**
         * Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.
         */
        browsers?: Schema$Browser[];
        /**
         * Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated.
         */
        connectionTypes?: Schema$ConnectionType[];
        /**
         * Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
         */
        mobileCarriers?: Schema$MobileCarrier[];
        /**
         * Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.
         */
        operatingSystems?: Schema$OperatingSystem[];
        /**
         * Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
         */
        operatingSystemVersions?: Schema$OperatingSystemVersion[];
        /**
         * Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.
         */
        platformTypes?: Schema$PlatformType[];
    }
    /**
     * Third Party Authentication Token
     */
    export interface Schema$ThirdPartyAuthenticationToken {
        /**
         * Name of the third-party authentication token.
         */
        name?: string | null;
        /**
         * Value of the third-party authentication token. This is a read-only, auto-generated field.
         */
        value?: string | null;
    }
    /**
     * Third-party Tracking URL.
     */
    export interface Schema$ThirdPartyTrackingUrl {
        /**
         * Third-party URL type for in-stream video and in-stream audio creatives.
         */
        thirdPartyUrlType?: string | null;
        /**
         * URL for the specified third-party URL type.
         */
        url?: string | null;
    }
    /**
     * Transcode Settings
     */
    export interface Schema$TranscodeSetting {
        /**
         * Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
         */
        enabledVideoFormats?: number[] | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".
         */
        kind?: string | null;
    }
    /**
     * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
     */
    export interface Schema$UniversalAdId {
        /**
         * Registry used for the Ad ID value.
         */
        registry?: string | null;
        /**
         * ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM.
         */
        value?: string | null;
    }
    /**
     * User Defined Variable configuration.
     */
    export interface Schema$UserDefinedVariableConfiguration {
        /**
         * Data type for the variable. This is a required field.
         */
        dataType?: string | null;
        /**
         * User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<\>".
         */
        reportName?: string | null;
        /**
         * Variable name in the tag. This is a required field.
         */
        variableType?: string | null;
    }
    /**
     * User identifying information. Exactly one type of identifier must be specified.
     */
    export interface Schema$UserIdentifier {
        /**
         * Address information.
         */
        addressInfo?: Schema$OfflineUserAddressInfo;
        /**
         * Hashed email address using SHA-256 hash function after normalization.
         */
        hashedEmail?: string | null;
        /**
         * Hashed phone number using SHA-256 hash function after normalization (E164 standard).
         */
        hashedPhoneNumber?: string | null;
    }
    /**
     * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.
     */
    export interface Schema$UserProfile {
        /**
         * The account ID to which this profile belongs.
         */
        accountId?: string | null;
        /**
         * The account name this profile belongs to.
         */
        accountName?: string | null;
        /**
         * Etag of this resource.
         */
        etag?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile".
         */
        kind?: string | null;
        /**
         * The unique ID of the user profile.
         */
        profileId?: string | null;
        /**
         * The sub account ID this profile belongs to if applicable.
         */
        subAccountId?: string | null;
        /**
         * The sub account name this profile belongs to if applicable.
         */
        subAccountName?: string | null;
        /**
         * The user name.
         */
        userName?: string | null;
    }
    /**
     * Represents the list of user profiles.
     */
    export interface Schema$UserProfileList {
        /**
         * Etag of this resource.
         */
        etag?: string | null;
        /**
         * The user profiles returned in this response.
         */
        items?: Schema$UserProfile[];
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList".
         */
        kind?: string | null;
    }
    /**
     * Contains properties of auser role, which is used to manage user access.
     */
    export interface Schema$UserRole {
        /**
         * Account ID of this user role. This is a read-only field that can be left blank.
         */
        accountId?: string | null;
        /**
         * Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
         */
        defaultUserRole?: boolean | null;
        /**
         * ID of this user role. This is a read-only, auto-generated field.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
         */
        kind?: string | null;
        /**
         * Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.
         */
        name?: string | null;
        /**
         * ID of the user role that this user role is based on or copied from. This is a required field.
         */
        parentUserRoleId?: string | null;
        /**
         * List of permissions associated with this user role.
         */
        permissions?: Schema$UserRolePermission[];
        /**
         * Subaccount ID of this user role. This is a read-only field that can be left blank.
         */
        subaccountId?: string | null;
    }
    /**
     * Contains properties of a user role permission.
     */
    export interface Schema$UserRolePermission {
        /**
         * Levels of availability for a user role permission.
         */
        availability?: string | null;
        /**
         * ID of this user role permission.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
         */
        kind?: string | null;
        /**
         * Name of this user role permission.
         */
        name?: string | null;
        /**
         * ID of the permission group that this user role permission belongs to.
         */
        permissionGroupId?: string | null;
    }
    /**
     * Represents a grouping of related user role permissions.
     */
    export interface Schema$UserRolePermissionGroup {
        /**
         * ID of this user role permission.
         */
        id?: string | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
         */
        kind?: string | null;
        /**
         * Name of this user role permission group.
         */
        name?: string | null;
    }
    /**
     * User Role Permission Group List Response
     */
    export interface Schema$UserRolePermissionGroupsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
         */
        kind?: string | null;
        /**
         * User role permission group collection.
         */
        userRolePermissionGroups?: Schema$UserRolePermissionGroup[];
    }
    /**
     * User Role Permission List Response
     */
    export interface Schema$UserRolePermissionsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
         */
        kind?: string | null;
        /**
         * User role permission collection.
         */
        userRolePermissions?: Schema$UserRolePermission[];
    }
    /**
     * User Role List Response
     */
    export interface Schema$UserRolesListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
         */
        kind?: string | null;
        /**
         * Pagination token to be used for the next list operation.
         */
        nextPageToken?: string | null;
        /**
         * User role collection.
         */
        userRoles?: Schema$UserRole[];
    }
    /**
     * Defines the filtering on a single uvar.
     */
    export interface Schema$UvarFilter {
        /**
         * Return rows which don't match this filter.
         */
        complement?: boolean | null;
        /**
         * Custom variable index the filter is applied to.
         */
        index?: string | null;
        /**
         * The kind of resource this is, in this case dfareporting#uvarFilter.
         */
        kind?: string | null;
        /**
         * Indicates how the filter should be matched to the values.
         */
        match?: string | null;
        /**
         * Values to filter on.
         */
        values?: string[] | null;
    }
    /**
     * Contains information about supported video formats.
     */
    export interface Schema$VideoFormat {
        /**
         * File type of the video format.
         */
        fileType?: string | null;
        /**
         * ID of the video format.
         */
        id?: number | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
         */
        kind?: string | null;
        /**
         * The resolution of this video format.
         */
        resolution?: Schema$Size;
        /**
         * The target bit rate of this video format.
         */
        targetBitRate?: number | null;
    }
    /**
     * Video Format List Response
     */
    export interface Schema$VideoFormatsListResponse {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".
         */
        kind?: string | null;
        /**
         * Video format collection.
         */
        videoFormats?: Schema$VideoFormat[];
    }
    /**
     * Video Offset
     */
    export interface Schema$VideoOffset {
        /**
         * Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.
         */
        offsetPercentage?: number | null;
        /**
         * Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.
         */
        offsetSeconds?: number | null;
    }
    /**
     * Video Settings
     */
    export interface Schema$VideoSettings {
        /**
         * Settings for the companion creatives of video creatives served to this placement.
         */
        companionSettings?: Schema$CompanionSetting;
        /**
         * Duration of a video placement in seconds.
         */
        durationSeconds?: number | null;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".
         */
        kind?: string | null;
        /**
         * Whether OBA icons are enabled for this placement.
         */
        obaEnabled?: boolean | null;
        /**
         * Settings for the OBA icon of video creatives served to this placement. If this object is provided, the creative-level OBA settings will be overridden.
         */
        obaSettings?: Schema$ObaIcon;
        /**
         * Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
         */
        orientation?: string | null;
        /**
         * Publisher specification ID of a video placement.
         */
        publisherSpecificationId?: string | null;
        /**
         * Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be overridden.
         */
        skippableSettings?: Schema$SkippableSetting;
        /**
         * Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be overridden.
         */
        transcodeSettings?: Schema$TranscodeSetting;
    }
    export class Resource$Accountactiveadsummaries {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the account's active ad summary by account ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accountactiveadsummaries$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accountactiveadsummaries$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountActiveAdSummary>;
        get(params: Params$Resource$Accountactiveadsummaries$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accountactiveadsummaries$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountActiveAdSummary>, callback: BodyResponseCallback<Schema$AccountActiveAdSummary>): void;
        get(params: Params$Resource$Accountactiveadsummaries$Get, callback: BodyResponseCallback<Schema$AccountActiveAdSummary>): void;
        get(callback: BodyResponseCallback<Schema$AccountActiveAdSummary>): void;
    }
    export interface Params$Resource$Accountactiveadsummaries$Get extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Account ID.
         */
        summaryAccountId?: string;
    }
    export class Resource$Accountpermissiongroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one account permission group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accountpermissiongroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accountpermissiongroups$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountPermissionGroup>;
        get(params: Params$Resource$Accountpermissiongroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accountpermissiongroups$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountPermissionGroup>, callback: BodyResponseCallback<Schema$AccountPermissionGroup>): void;
        get(params: Params$Resource$Accountpermissiongroups$Get, callback: BodyResponseCallback<Schema$AccountPermissionGroup>): void;
        get(callback: BodyResponseCallback<Schema$AccountPermissionGroup>): void;
        /**
         * Retrieves the list of account permission groups.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accountpermissiongroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accountpermissiongroups$List, options?: MethodOptions): GaxiosPromise<Schema$AccountPermissionGroupsListResponse>;
        list(params: Params$Resource$Accountpermissiongroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accountpermissiongroups$List, options: MethodOptions | BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>, callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>): void;
        list(params: Params$Resource$Accountpermissiongroups$List, callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>): void;
    }
    export interface Params$Resource$Accountpermissiongroups$Get extends StandardParameters {
        /**
         * Account permission group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Accountpermissiongroups$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Accountpermissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one account permission by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accountpermissions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accountpermissions$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountPermission>;
        get(params: Params$Resource$Accountpermissions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accountpermissions$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountPermission>, callback: BodyResponseCallback<Schema$AccountPermission>): void;
        get(params: Params$Resource$Accountpermissions$Get, callback: BodyResponseCallback<Schema$AccountPermission>): void;
        get(callback: BodyResponseCallback<Schema$AccountPermission>): void;
        /**
         * Retrieves the list of account permissions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accountpermissions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accountpermissions$List, options?: MethodOptions): GaxiosPromise<Schema$AccountPermissionsListResponse>;
        list(params: Params$Resource$Accountpermissions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accountpermissions$List, options: MethodOptions | BodyResponseCallback<Schema$AccountPermissionsListResponse>, callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>): void;
        list(params: Params$Resource$Accountpermissions$List, callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>): void;
    }
    export interface Params$Resource$Accountpermissions$Get extends StandardParameters {
        /**
         * Account permission ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Accountpermissions$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one account by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Retrieves the list of accounts, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$AccountsListResponse>;
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$AccountsListResponse>, callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
        /**
         * Updates an existing account. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Accounts$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Accounts$Patch, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        patch(params: Params$Resource$Accounts$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Accounts$Patch, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        patch(params: Params$Resource$Accounts$Patch, callback: BodyResponseCallback<Schema$Account>): void;
        patch(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * Updates an existing account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): GaxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    export interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * Account ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Select only active accounts. Don't set this field to select both active and non-active accounts.
         */
        active?: boolean;
        /**
         * Select only accounts with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Accounts$Patch extends StandardParameters {
        /**
         * Required. Account ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    export class Resource$Accountuserprofiles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one account user profile by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Accountuserprofiles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accountuserprofiles$Get, options?: MethodOptions): GaxiosPromise<Schema$AccountUserProfile>;
        get(params: Params$Resource$Accountuserprofiles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accountuserprofiles$Get, options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        get(params: Params$Resource$Accountuserprofiles$Get, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        get(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        /**
         * Inserts a new account user profile.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Accountuserprofiles$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Accountuserprofiles$Insert, options?: MethodOptions): GaxiosPromise<Schema$AccountUserProfile>;
        insert(params: Params$Resource$Accountuserprofiles$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Accountuserprofiles$Insert, options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        insert(params: Params$Resource$Accountuserprofiles$Insert, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        insert(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        /**
         * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Accountuserprofiles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accountuserprofiles$List, options?: MethodOptions): GaxiosPromise<Schema$AccountUserProfilesListResponse>;
        list(params: Params$Resource$Accountuserprofiles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accountuserprofiles$List, options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfilesListResponse>, callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>): void;
        list(params: Params$Resource$Accountuserprofiles$List, callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>): void;
        /**
         * Updates an existing user role. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Accountuserprofiles$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Accountuserprofiles$Patch, options?: MethodOptions): GaxiosPromise<Schema$AccountUserProfile>;
        patch(params: Params$Resource$Accountuserprofiles$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Accountuserprofiles$Patch, options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        patch(params: Params$Resource$Accountuserprofiles$Patch, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        patch(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        /**
         * Updates an existing account user profile.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Accountuserprofiles$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Accountuserprofiles$Update, options?: MethodOptions): GaxiosPromise<Schema$AccountUserProfile>;
        update(params: Params$Resource$Accountuserprofiles$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Accountuserprofiles$Update, options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        update(params: Params$Resource$Accountuserprofiles$Update, callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
        update(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
    }
    export interface Params$Resource$Accountuserprofiles$Get extends StandardParameters {
        /**
         * User profile ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Accountuserprofiles$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountUserProfile;
    }
    export interface Params$Resource$Accountuserprofiles$List extends StandardParameters {
        /**
         * Select only active user profiles.
         */
        active?: boolean;
        /**
         * Select only user profiles with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only user profiles with the specified subaccount ID.
         */
        subaccountId?: string;
        /**
         * Select only user profiles with the specified user role ID.
         */
        userRoleId?: string;
    }
    export interface Params$Resource$Accountuserprofiles$Patch extends StandardParameters {
        /**
         * Required. AccountUserProfile ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountUserProfile;
    }
    export interface Params$Resource$Accountuserprofiles$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AccountUserProfile;
    }
    export class Resource$Ads {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one ad by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Ads$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Ads$Get, options?: MethodOptions): GaxiosPromise<Schema$Ad>;
        get(params: Params$Resource$Ads$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Ads$Get, options: MethodOptions | BodyResponseCallback<Schema$Ad>, callback: BodyResponseCallback<Schema$Ad>): void;
        get(params: Params$Resource$Ads$Get, callback: BodyResponseCallback<Schema$Ad>): void;
        get(callback: BodyResponseCallback<Schema$Ad>): void;
        /**
         * Inserts a new ad.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Ads$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Ads$Insert, options?: MethodOptions): GaxiosPromise<Schema$Ad>;
        insert(params: Params$Resource$Ads$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Ads$Insert, options: MethodOptions | BodyResponseCallback<Schema$Ad>, callback: BodyResponseCallback<Schema$Ad>): void;
        insert(params: Params$Resource$Ads$Insert, callback: BodyResponseCallback<Schema$Ad>): void;
        insert(callback: BodyResponseCallback<Schema$Ad>): void;
        /**
         * Retrieves a list of ads, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Ads$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Ads$List, options?: MethodOptions): GaxiosPromise<Schema$AdsListResponse>;
        list(params: Params$Resource$Ads$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Ads$List, options: MethodOptions | BodyResponseCallback<Schema$AdsListResponse>, callback: BodyResponseCallback<Schema$AdsListResponse>): void;
        list(params: Params$Resource$Ads$List, callback: BodyResponseCallback<Schema$AdsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AdsListResponse>): void;
        /**
         * Updates an existing event tag. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Ads$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Ads$Patch, options?: MethodOptions): GaxiosPromise<Schema$Ad>;
        patch(params: Params$Resource$Ads$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Ads$Patch, options: MethodOptions | BodyResponseCallback<Schema$Ad>, callback: BodyResponseCallback<Schema$Ad>): void;
        patch(params: Params$Resource$Ads$Patch, callback: BodyResponseCallback<Schema$Ad>): void;
        patch(callback: BodyResponseCallback<Schema$Ad>): void;
        /**
         * Updates an existing ad.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Ads$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Ads$Update, options?: MethodOptions): GaxiosPromise<Schema$Ad>;
        update(params: Params$Resource$Ads$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Ads$Update, options: MethodOptions | BodyResponseCallback<Schema$Ad>, callback: BodyResponseCallback<Schema$Ad>): void;
        update(params: Params$Resource$Ads$Update, callback: BodyResponseCallback<Schema$Ad>): void;
        update(callback: BodyResponseCallback<Schema$Ad>): void;
    }
    export interface Params$Resource$Ads$Get extends StandardParameters {
        /**
         * Ad ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Ads$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Ad;
    }
    export interface Params$Resource$Ads$List extends StandardParameters {
        /**
         * Select only active ads.
         */
        active?: boolean;
        /**
         * Select only ads with this advertiser ID.
         */
        advertiserId?: string;
        /**
         * Select only archived ads.
         */
        archived?: boolean;
        /**
         * Select only ads with these audience segment IDs.
         */
        audienceSegmentIds?: string[];
        /**
         * Select only ads with these campaign IDs.
         */
        campaignIds?: string[];
        /**
         * Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
         */
        compatibility?: string;
        /**
         * Select only ads with these creative IDs assigned.
         */
        creativeIds?: string[];
        /**
         * Select only ads with these creative optimization configuration IDs.
         */
        creativeOptimizationConfigurationIds?: string[];
        /**
         * Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
         */
        dynamicClickTracker?: boolean;
        /**
         * Select only ads with these IDs.
         */
        ids?: string[];
        /**
         * Select only ads with these landing page IDs.
         */
        landingPageIds?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only ads with this event tag override ID.
         */
        overriddenEventTagId?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * Select only ads with these placement IDs assigned.
         */
        placementIds?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Select only ads whose list targeting expression use these remarketing list IDs.
         */
        remarketingListIds?: string[];
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
         */
        searchString?: string;
        /**
         * Select only ads with these size IDs.
         */
        sizeIds?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only ads that are SSL-compliant.
         */
        sslCompliant?: boolean;
        /**
         * Select only ads that require SSL.
         */
        sslRequired?: boolean;
        /**
         * Select only ads with these types.
         */
        type?: string[];
    }
    export interface Params$Resource$Ads$Patch extends StandardParameters {
        /**
         * Required. RemarketingList ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Ad;
    }
    export interface Params$Resource$Ads$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Ad;
    }
    export class Resource$Advertisergroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing advertiser group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Advertisergroups$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Advertisergroups$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Advertisergroups$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Advertisergroups$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Advertisergroups$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one advertiser group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Advertisergroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Advertisergroups$Get, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserGroup>;
        get(params: Params$Resource$Advertisergroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Advertisergroups$Get, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        get(params: Params$Resource$Advertisergroups$Get, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        get(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        /**
         * Inserts a new advertiser group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Advertisergroups$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Advertisergroups$Insert, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserGroup>;
        insert(params: Params$Resource$Advertisergroups$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Advertisergroups$Insert, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        insert(params: Params$Resource$Advertisergroups$Insert, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        insert(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        /**
         * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Advertisergroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Advertisergroups$List, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserGroupsListResponse>;
        list(params: Params$Resource$Advertisergroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Advertisergroups$List, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroupsListResponse>, callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>): void;
        list(params: Params$Resource$Advertisergroups$List, callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>): void;
        /**
         * Updates an existing advertiser group. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Advertisergroups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Advertisergroups$Patch, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserGroup>;
        patch(params: Params$Resource$Advertisergroups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Advertisergroups$Patch, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        patch(params: Params$Resource$Advertisergroups$Patch, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        patch(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        /**
         * Updates an existing advertiser group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Advertisergroups$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Advertisergroups$Update, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserGroup>;
        update(params: Params$Resource$Advertisergroups$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Advertisergroups$Update, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        update(params: Params$Resource$Advertisergroups$Update, callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
        update(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
    }
    export interface Params$Resource$Advertisergroups$Delete extends StandardParameters {
        /**
         * Advertiser group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Advertisergroups$Get extends StandardParameters {
        /**
         * Advertiser group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Advertisergroups$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AdvertiserGroup;
    }
    export interface Params$Resource$Advertisergroups$List extends StandardParameters {
        /**
         * Select only advertiser groups with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Advertisergroups$Patch extends StandardParameters {
        /**
         * Required. Advertiser Group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AdvertiserGroup;
    }
    export interface Params$Resource$Advertisergroups$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AdvertiserGroup;
    }
    export class Resource$Advertiserinvoices {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Advertiserinvoices$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Advertiserinvoices$List, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserInvoicesListResponse>;
        list(params: Params$Resource$Advertiserinvoices$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Advertiserinvoices$List, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserInvoicesListResponse>, callback: BodyResponseCallback<Schema$AdvertiserInvoicesListResponse>): void;
        list(params: Params$Resource$Advertiserinvoices$List, callback: BodyResponseCallback<Schema$AdvertiserInvoicesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AdvertiserInvoicesListResponse>): void;
    }
    export interface Params$Resource$Advertiserinvoices$List extends StandardParameters {
        /**
         * Advertiser ID of this invoice.
         */
        advertiserId?: string;
        /**
         * Month for which invoices are needed in the format YYYYMM. Required field
         */
        issueMonth?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Advertiserlandingpages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one landing page by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Advertiserlandingpages$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Advertiserlandingpages$Get, options?: MethodOptions): GaxiosPromise<Schema$LandingPage>;
        get(params: Params$Resource$Advertiserlandingpages$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Advertiserlandingpages$Get, options: MethodOptions | BodyResponseCallback<Schema$LandingPage>, callback: BodyResponseCallback<Schema$LandingPage>): void;
        get(params: Params$Resource$Advertiserlandingpages$Get, callback: BodyResponseCallback<Schema$LandingPage>): void;
        get(callback: BodyResponseCallback<Schema$LandingPage>): void;
        /**
         * Inserts a new landing page.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Advertiserlandingpages$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Advertiserlandingpages$Insert, options?: MethodOptions): GaxiosPromise<Schema$LandingPage>;
        insert(params: Params$Resource$Advertiserlandingpages$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Advertiserlandingpages$Insert, options: MethodOptions | BodyResponseCallback<Schema$LandingPage>, callback: BodyResponseCallback<Schema$LandingPage>): void;
        insert(params: Params$Resource$Advertiserlandingpages$Insert, callback: BodyResponseCallback<Schema$LandingPage>): void;
        insert(callback: BodyResponseCallback<Schema$LandingPage>): void;
        /**
         * Retrieves a list of landing pages.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Advertiserlandingpages$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Advertiserlandingpages$List, options?: MethodOptions): GaxiosPromise<Schema$AdvertiserLandingPagesListResponse>;
        list(params: Params$Resource$Advertiserlandingpages$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Advertiserlandingpages$List, options: MethodOptions | BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>, callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>): void;
        list(params: Params$Resource$Advertiserlandingpages$List, callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>): void;
        /**
         * Updates an existing advertiser. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Advertiserlandingpages$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Advertiserlandingpages$Patch, options?: MethodOptions): GaxiosPromise<Schema$LandingPage>;
        patch(params: Params$Resource$Advertiserlandingpages$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Advertiserlandingpages$Patch, options: MethodOptions | BodyResponseCallback<Schema$LandingPage>, callback: BodyResponseCallback<Schema$LandingPage>): void;
        patch(params: Params$Resource$Advertiserlandingpages$Patch, callback: BodyResponseCallback<Schema$LandingPage>): void;
        patch(callback: BodyResponseCallback<Schema$LandingPage>): void;
        /**
         * Updates an existing landing page.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Advertiserlandingpages$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Advertiserlandingpages$Update, options?: MethodOptions): GaxiosPromise<Schema$LandingPage>;
        update(params: Params$Resource$Advertiserlandingpages$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Advertiserlandingpages$Update, options: MethodOptions | BodyResponseCallback<Schema$LandingPage>, callback: BodyResponseCallback<Schema$LandingPage>): void;
        update(params: Params$Resource$Advertiserlandingpages$Update, callback: BodyResponseCallback<Schema$LandingPage>): void;
        update(callback: BodyResponseCallback<Schema$LandingPage>): void;
    }
    export interface Params$Resource$Advertiserlandingpages$Get extends StandardParameters {
        /**
         * Landing page ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Advertiserlandingpages$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LandingPage;
    }
    export interface Params$Resource$Advertiserlandingpages$List extends StandardParameters {
        /**
         * Select only landing pages that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
         */
        archived?: boolean;
        /**
         * Select only landing pages that are associated with these campaigns.
         */
        campaignIds?: string[];
        /**
         * Select only landing pages with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only landing pages that belong to this subaccount.
         */
        subaccountId?: string;
    }
    export interface Params$Resource$Advertiserlandingpages$Patch extends StandardParameters {
        /**
         * Required. Landing Page ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LandingPage;
    }
    export interface Params$Resource$Advertiserlandingpages$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LandingPage;
    }
    export class Resource$Advertisers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one advertiser by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Advertisers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Advertisers$Get, options?: MethodOptions): GaxiosPromise<Schema$Advertiser>;
        get(params: Params$Resource$Advertisers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Advertisers$Get, options: MethodOptions | BodyResponseCallback<Schema$Advertiser>, callback: BodyResponseCallback<Schema$Advertiser>): void;
        get(params: Params$Resource$Advertisers$Get, callback: BodyResponseCallback<Schema$Advertiser>): void;
        get(callback: BodyResponseCallback<Schema$Advertiser>): void;
        /**
         * Inserts a new advertiser.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Advertisers$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Advertisers$Insert, options?: MethodOptions): GaxiosPromise<Schema$Advertiser>;
        insert(params: Params$Resource$Advertisers$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Advertisers$Insert, options: MethodOptions | BodyResponseCallback<Schema$Advertiser>, callback: BodyResponseCallback<Schema$Advertiser>): void;
        insert(params: Params$Resource$Advertisers$Insert, callback: BodyResponseCallback<Schema$Advertiser>): void;
        insert(callback: BodyResponseCallback<Schema$Advertiser>): void;
        /**
         * Retrieves a list of advertisers, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Advertisers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Advertisers$List, options?: MethodOptions): GaxiosPromise<Schema$AdvertisersListResponse>;
        list(params: Params$Resource$Advertisers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Advertisers$List, options: MethodOptions | BodyResponseCallback<Schema$AdvertisersListResponse>, callback: BodyResponseCallback<Schema$AdvertisersListResponse>): void;
        list(params: Params$Resource$Advertisers$List, callback: BodyResponseCallback<Schema$AdvertisersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AdvertisersListResponse>): void;
        /**
         * Updates an existing advertiser. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Advertisers$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Advertisers$Patch, options?: MethodOptions): GaxiosPromise<Schema$Advertiser>;
        patch(params: Params$Resource$Advertisers$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Advertisers$Patch, options: MethodOptions | BodyResponseCallback<Schema$Advertiser>, callback: BodyResponseCallback<Schema$Advertiser>): void;
        patch(params: Params$Resource$Advertisers$Patch, callback: BodyResponseCallback<Schema$Advertiser>): void;
        patch(callback: BodyResponseCallback<Schema$Advertiser>): void;
        /**
         * Updates an existing advertiser.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Advertisers$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Advertisers$Update, options?: MethodOptions): GaxiosPromise<Schema$Advertiser>;
        update(params: Params$Resource$Advertisers$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Advertisers$Update, options: MethodOptions | BodyResponseCallback<Schema$Advertiser>, callback: BodyResponseCallback<Schema$Advertiser>): void;
        update(params: Params$Resource$Advertisers$Update, callback: BodyResponseCallback<Schema$Advertiser>): void;
        update(callback: BodyResponseCallback<Schema$Advertiser>): void;
    }
    export interface Params$Resource$Advertisers$Get extends StandardParameters {
        /**
         * Advertiser ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Advertisers$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Advertiser;
    }
    export interface Params$Resource$Advertisers$List extends StandardParameters {
        /**
         * Select only advertisers with these advertiser group IDs.
         */
        advertiserGroupIds?: string[];
        /**
         * Select only advertisers with these floodlight configuration IDs.
         */
        floodlightConfigurationIds?: string[];
        /**
         * Select only advertisers with these IDs.
         */
        ids?: string[];
        /**
         * Select only advertisers which do not belong to any advertiser group.
         */
        includeAdvertisersWithoutGroupsOnly?: boolean;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only advertisers which use another advertiser's floodlight configuration.
         */
        onlyParent?: boolean;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only advertisers with the specified status.
         */
        status?: string;
        /**
         * Select only advertisers with these subaccount IDs.
         */
        subaccountId?: string;
    }
    export interface Params$Resource$Advertisers$Patch extends StandardParameters {
        /**
         * Required. Advertiser ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Advertiser;
    }
    export interface Params$Resource$Advertisers$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Advertiser;
    }
    export class Resource$Billingassignments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Billingassignments$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Billingassignments$Insert, options?: MethodOptions): GaxiosPromise<Schema$BillingAssignment>;
        insert(params: Params$Resource$Billingassignments$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Billingassignments$Insert, options: MethodOptions | BodyResponseCallback<Schema$BillingAssignment>, callback: BodyResponseCallback<Schema$BillingAssignment>): void;
        insert(params: Params$Resource$Billingassignments$Insert, callback: BodyResponseCallback<Schema$BillingAssignment>): void;
        insert(callback: BodyResponseCallback<Schema$BillingAssignment>): void;
        /**
         * Retrieves a list of billing assignments.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Billingassignments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Billingassignments$List, options?: MethodOptions): GaxiosPromise<Schema$BillingAssignmentsListResponse>;
        list(params: Params$Resource$Billingassignments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Billingassignments$List, options: MethodOptions | BodyResponseCallback<Schema$BillingAssignmentsListResponse>, callback: BodyResponseCallback<Schema$BillingAssignmentsListResponse>): void;
        list(params: Params$Resource$Billingassignments$List, callback: BodyResponseCallback<Schema$BillingAssignmentsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BillingAssignmentsListResponse>): void;
    }
    export interface Params$Resource$Billingassignments$Insert extends StandardParameters {
        /**
         * Billing profile ID of this billing assignment.
         */
        billingProfileId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BillingAssignment;
    }
    export interface Params$Resource$Billingassignments$List extends StandardParameters {
        /**
         * Billing profile ID of this billing assignment.
         */
        billingProfileId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Billingprofiles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one billing profile by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Billingprofiles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Billingprofiles$Get, options?: MethodOptions): GaxiosPromise<Schema$BillingProfile>;
        get(params: Params$Resource$Billingprofiles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Billingprofiles$Get, options: MethodOptions | BodyResponseCallback<Schema$BillingProfile>, callback: BodyResponseCallback<Schema$BillingProfile>): void;
        get(params: Params$Resource$Billingprofiles$Get, callback: BodyResponseCallback<Schema$BillingProfile>): void;
        get(callback: BodyResponseCallback<Schema$BillingProfile>): void;
        /**
         * Retrieves a list of billing profiles, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Billingprofiles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Billingprofiles$List, options?: MethodOptions): GaxiosPromise<Schema$BillingProfilesListResponse>;
        list(params: Params$Resource$Billingprofiles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Billingprofiles$List, options: MethodOptions | BodyResponseCallback<Schema$BillingProfilesListResponse>, callback: BodyResponseCallback<Schema$BillingProfilesListResponse>): void;
        list(params: Params$Resource$Billingprofiles$List, callback: BodyResponseCallback<Schema$BillingProfilesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BillingProfilesListResponse>): void;
        /**
         * Updates an existing billing profile.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Billingprofiles$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Billingprofiles$Update, options?: MethodOptions): GaxiosPromise<Schema$BillingProfile>;
        update(params: Params$Resource$Billingprofiles$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Billingprofiles$Update, options: MethodOptions | BodyResponseCallback<Schema$BillingProfile>, callback: BodyResponseCallback<Schema$BillingProfile>): void;
        update(params: Params$Resource$Billingprofiles$Update, callback: BodyResponseCallback<Schema$BillingProfile>): void;
        update(callback: BodyResponseCallback<Schema$BillingProfile>): void;
    }
    export interface Params$Resource$Billingprofiles$Get extends StandardParameters {
        /**
         * Billing Profile ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Billingprofiles$List extends StandardParameters {
        /**
         * Select only billing profile with currency.
         */
        currency_code?: string;
        /**
         * Select only billing profile with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile".
         */
        name?: string;
        /**
         * Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API.
         */
        onlySuggestion?: boolean;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only billing profile with the specified status.
         */
        status?: string[];
        /**
         * Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported.
         */
        subaccountIds?: string[];
    }
    export interface Params$Resource$Billingprofiles$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BillingProfile;
    }
    export class Resource$Billingrates {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of billing rates. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Billingrates$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Billingrates$List, options?: MethodOptions): GaxiosPromise<Schema$BillingRatesListResponse>;
        list(params: Params$Resource$Billingrates$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Billingrates$List, options: MethodOptions | BodyResponseCallback<Schema$BillingRatesListResponse>, callback: BodyResponseCallback<Schema$BillingRatesListResponse>): void;
        list(params: Params$Resource$Billingrates$List, callback: BodyResponseCallback<Schema$BillingRatesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BillingRatesListResponse>): void;
    }
    export interface Params$Resource$Billingrates$List extends StandardParameters {
        /**
         * Billing profile ID of this billing rate.
         */
        billingProfileId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Browsers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of browsers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Browsers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Browsers$List, options?: MethodOptions): GaxiosPromise<Schema$BrowsersListResponse>;
        list(params: Params$Resource$Browsers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Browsers$List, options: MethodOptions | BodyResponseCallback<Schema$BrowsersListResponse>, callback: BodyResponseCallback<Schema$BrowsersListResponse>): void;
        list(params: Params$Resource$Browsers$List, callback: BodyResponseCallback<Schema$BrowsersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$BrowsersListResponse>): void;
    }
    export interface Params$Resource$Browsers$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Campaigncreativeassociations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Campaigncreativeassociations$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Campaigncreativeassociations$Insert, options?: MethodOptions): GaxiosPromise<Schema$CampaignCreativeAssociation>;
        insert(params: Params$Resource$Campaigncreativeassociations$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Campaigncreativeassociations$Insert, options: MethodOptions | BodyResponseCallback<Schema$CampaignCreativeAssociation>, callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>): void;
        insert(params: Params$Resource$Campaigncreativeassociations$Insert, callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>): void;
        insert(callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>): void;
        /**
         * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Campaigncreativeassociations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Campaigncreativeassociations$List, options?: MethodOptions): GaxiosPromise<Schema$CampaignCreativeAssociationsListResponse>;
        list(params: Params$Resource$Campaigncreativeassociations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Campaigncreativeassociations$List, options: MethodOptions | BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>, callback: BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>): void;
        list(params: Params$Resource$Campaigncreativeassociations$List, callback: BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>): void;
    }
    export interface Params$Resource$Campaigncreativeassociations$Insert extends StandardParameters {
        /**
         * Campaign ID in this association.
         */
        campaignId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CampaignCreativeAssociation;
    }
    export interface Params$Resource$Campaigncreativeassociations$List extends StandardParameters {
        /**
         * Campaign ID in this association.
         */
        campaignId?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Campaigns {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one campaign by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Campaigns$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Campaigns$Get, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
        get(params: Params$Resource$Campaigns$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Campaigns$Get, options: MethodOptions | BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
        get(params: Params$Resource$Campaigns$Get, callback: BodyResponseCallback<Schema$Campaign>): void;
        get(callback: BodyResponseCallback<Schema$Campaign>): void;
        /**
         * Inserts a new campaign.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Campaigns$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Campaigns$Insert, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
        insert(params: Params$Resource$Campaigns$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Campaigns$Insert, options: MethodOptions | BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
        insert(params: Params$Resource$Campaigns$Insert, callback: BodyResponseCallback<Schema$Campaign>): void;
        insert(callback: BodyResponseCallback<Schema$Campaign>): void;
        /**
         * Retrieves a list of campaigns, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Campaigns$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Campaigns$List, options?: MethodOptions): GaxiosPromise<Schema$CampaignsListResponse>;
        list(params: Params$Resource$Campaigns$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Campaigns$List, options: MethodOptions | BodyResponseCallback<Schema$CampaignsListResponse>, callback: BodyResponseCallback<Schema$CampaignsListResponse>): void;
        list(params: Params$Resource$Campaigns$List, callback: BodyResponseCallback<Schema$CampaignsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CampaignsListResponse>): void;
        /**
         * Updates an existing creative. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Campaigns$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Campaigns$Patch, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
        patch(params: Params$Resource$Campaigns$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Campaigns$Patch, options: MethodOptions | BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
        patch(params: Params$Resource$Campaigns$Patch, callback: BodyResponseCallback<Schema$Campaign>): void;
        patch(callback: BodyResponseCallback<Schema$Campaign>): void;
        /**
         * Updates an existing campaign.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Campaigns$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Campaigns$Update, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
        update(params: Params$Resource$Campaigns$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Campaigns$Update, options: MethodOptions | BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
        update(params: Params$Resource$Campaigns$Update, callback: BodyResponseCallback<Schema$Campaign>): void;
        update(callback: BodyResponseCallback<Schema$Campaign>): void;
    }
    export interface Params$Resource$Campaigns$Get extends StandardParameters {
        /**
         * Campaign ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Campaigns$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Campaign;
    }
    export interface Params$Resource$Campaigns$List extends StandardParameters {
        /**
         * Select only campaigns whose advertisers belong to these advertiser groups.
         */
        advertiserGroupIds?: string[];
        /**
         * Select only campaigns that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
         */
        archived?: boolean;
        /**
         * Select only campaigns that have at least one optimization activity.
         */
        atLeastOneOptimizationActivity?: boolean;
        /**
         * Exclude campaigns with these IDs.
         */
        excludedIds?: string[];
        /**
         * Select only campaigns with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only campaigns that have overridden this event tag ID.
         */
        overriddenEventTagId?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only campaigns that belong to this subaccount.
         */
        subaccountId?: string;
    }
    export interface Params$Resource$Campaigns$Patch extends StandardParameters {
        /**
         * Required. Campaign ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Campaign;
    }
    export interface Params$Resource$Campaigns$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Campaign;
    }
    export class Resource$Changelogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one change log by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Changelogs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Changelogs$Get, options?: MethodOptions): GaxiosPromise<Schema$ChangeLog>;
        get(params: Params$Resource$Changelogs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Changelogs$Get, options: MethodOptions | BodyResponseCallback<Schema$ChangeLog>, callback: BodyResponseCallback<Schema$ChangeLog>): void;
        get(params: Params$Resource$Changelogs$Get, callback: BodyResponseCallback<Schema$ChangeLog>): void;
        get(callback: BodyResponseCallback<Schema$ChangeLog>): void;
        /**
         * Retrieves a list of change logs. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Changelogs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Changelogs$List, options?: MethodOptions): GaxiosPromise<Schema$ChangeLogsListResponse>;
        list(params: Params$Resource$Changelogs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Changelogs$List, options: MethodOptions | BodyResponseCallback<Schema$ChangeLogsListResponse>, callback: BodyResponseCallback<Schema$ChangeLogsListResponse>): void;
        list(params: Params$Resource$Changelogs$List, callback: BodyResponseCallback<Schema$ChangeLogsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ChangeLogsListResponse>): void;
    }
    export interface Params$Resource$Changelogs$Get extends StandardParameters {
        /**
         * Change log ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Changelogs$List extends StandardParameters {
        /**
         * Select only change logs with the specified action.
         */
        action?: string;
        /**
         * Select only change logs with these IDs.
         */
        ids?: string[];
        /**
         * Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
         */
        maxChangeTime?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
         */
        minChangeTime?: string;
        /**
         * Select only change logs with these object IDs.
         */
        objectIds?: string[];
        /**
         * Select only change logs with the specified object type.
         */
        objectType?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Select only change logs whose object ID, user name, old or new values match the search string.
         */
        searchString?: string;
        /**
         * Select only change logs with these user profile IDs.
         */
        userProfileIds?: string[];
    }
    export class Resource$Cities {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of cities, possibly filtered.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Cities$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Cities$List, options?: MethodOptions): GaxiosPromise<Schema$CitiesListResponse>;
        list(params: Params$Resource$Cities$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Cities$List, options: MethodOptions | BodyResponseCallback<Schema$CitiesListResponse>, callback: BodyResponseCallback<Schema$CitiesListResponse>): void;
        list(params: Params$Resource$Cities$List, callback: BodyResponseCallback<Schema$CitiesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CitiesListResponse>): void;
    }
    export interface Params$Resource$Cities$List extends StandardParameters {
        /**
         * Select only cities from these countries.
         */
        countryDartIds?: string[];
        /**
         * Select only cities with these DART IDs.
         */
        dartIds?: string[];
        /**
         * Select only cities with names starting with this prefix.
         */
        namePrefix?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Select only cities from these regions.
         */
        regionDartIds?: string[];
    }
    export class Resource$Connectiontypes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one connection type by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Connectiontypes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Connectiontypes$Get, options?: MethodOptions): GaxiosPromise<Schema$ConnectionType>;
        get(params: Params$Resource$Connectiontypes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Connectiontypes$Get, options: MethodOptions | BodyResponseCallback<Schema$ConnectionType>, callback: BodyResponseCallback<Schema$ConnectionType>): void;
        get(params: Params$Resource$Connectiontypes$Get, callback: BodyResponseCallback<Schema$ConnectionType>): void;
        get(callback: BodyResponseCallback<Schema$ConnectionType>): void;
        /**
         * Retrieves a list of connection types.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Connectiontypes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Connectiontypes$List, options?: MethodOptions): GaxiosPromise<Schema$ConnectionTypesListResponse>;
        list(params: Params$Resource$Connectiontypes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Connectiontypes$List, options: MethodOptions | BodyResponseCallback<Schema$ConnectionTypesListResponse>, callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>): void;
        list(params: Params$Resource$Connectiontypes$List, callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>): void;
    }
    export interface Params$Resource$Connectiontypes$Get extends StandardParameters {
        /**
         * Connection type ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Connectiontypes$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Contentcategories {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing content category.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Contentcategories$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Contentcategories$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Contentcategories$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Contentcategories$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Contentcategories$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one content category by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Contentcategories$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Contentcategories$Get, options?: MethodOptions): GaxiosPromise<Schema$ContentCategory>;
        get(params: Params$Resource$Contentcategories$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Contentcategories$Get, options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        get(params: Params$Resource$Contentcategories$Get, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        get(callback: BodyResponseCallback<Schema$ContentCategory>): void;
        /**
         * Inserts a new content category.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Contentcategories$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Contentcategories$Insert, options?: MethodOptions): GaxiosPromise<Schema$ContentCategory>;
        insert(params: Params$Resource$Contentcategories$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Contentcategories$Insert, options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        insert(params: Params$Resource$Contentcategories$Insert, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        insert(callback: BodyResponseCallback<Schema$ContentCategory>): void;
        /**
         * Retrieves a list of content categories, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Contentcategories$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Contentcategories$List, options?: MethodOptions): GaxiosPromise<Schema$ContentCategoriesListResponse>;
        list(params: Params$Resource$Contentcategories$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Contentcategories$List, options: MethodOptions | BodyResponseCallback<Schema$ContentCategoriesListResponse>, callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>): void;
        list(params: Params$Resource$Contentcategories$List, callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>): void;
        /**
         * Updates an existing content category. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Contentcategories$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Contentcategories$Patch, options?: MethodOptions): GaxiosPromise<Schema$ContentCategory>;
        patch(params: Params$Resource$Contentcategories$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Contentcategories$Patch, options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        patch(params: Params$Resource$Contentcategories$Patch, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        patch(callback: BodyResponseCallback<Schema$ContentCategory>): void;
        /**
         * Updates an existing content category.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Contentcategories$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Contentcategories$Update, options?: MethodOptions): GaxiosPromise<Schema$ContentCategory>;
        update(params: Params$Resource$Contentcategories$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Contentcategories$Update, options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        update(params: Params$Resource$Contentcategories$Update, callback: BodyResponseCallback<Schema$ContentCategory>): void;
        update(callback: BodyResponseCallback<Schema$ContentCategory>): void;
    }
    export interface Params$Resource$Contentcategories$Delete extends StandardParameters {
        /**
         * Content category ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Contentcategories$Get extends StandardParameters {
        /**
         * Content category ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Contentcategories$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContentCategory;
    }
    export interface Params$Resource$Contentcategories$List extends StandardParameters {
        /**
         * Select only content categories with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Contentcategories$Patch extends StandardParameters {
        /**
         * Required. ContentCategory ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContentCategory;
    }
    export interface Params$Resource$Contentcategories$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ContentCategory;
    }
    export class Resource$Conversions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Inserts conversions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchinsert(params: Params$Resource$Conversions$Batchinsert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchinsert(params?: Params$Resource$Conversions$Batchinsert, options?: MethodOptions): GaxiosPromise<Schema$ConversionsBatchInsertResponse>;
        batchinsert(params: Params$Resource$Conversions$Batchinsert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchinsert(params: Params$Resource$Conversions$Batchinsert, options: MethodOptions | BodyResponseCallback<Schema$ConversionsBatchInsertResponse>, callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>): void;
        batchinsert(params: Params$Resource$Conversions$Batchinsert, callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>): void;
        batchinsert(callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>): void;
        /**
         * Updates existing conversions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchupdate(params: Params$Resource$Conversions$Batchupdate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchupdate(params?: Params$Resource$Conversions$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$ConversionsBatchUpdateResponse>;
        batchupdate(params: Params$Resource$Conversions$Batchupdate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchupdate(params: Params$Resource$Conversions$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>, callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>): void;
        batchupdate(params: Params$Resource$Conversions$Batchupdate, callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>): void;
        batchupdate(callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>): void;
    }
    export interface Params$Resource$Conversions$Batchinsert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ConversionsBatchInsertRequest;
    }
    export interface Params$Resource$Conversions$Batchupdate extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ConversionsBatchUpdateRequest;
    }
    export class Resource$Countries {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one country by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Countries$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Countries$Get, options?: MethodOptions): GaxiosPromise<Schema$Country>;
        get(params: Params$Resource$Countries$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Countries$Get, options: MethodOptions | BodyResponseCallback<Schema$Country>, callback: BodyResponseCallback<Schema$Country>): void;
        get(params: Params$Resource$Countries$Get, callback: BodyResponseCallback<Schema$Country>): void;
        get(callback: BodyResponseCallback<Schema$Country>): void;
        /**
         * Retrieves a list of countries.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Countries$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Countries$List, options?: MethodOptions): GaxiosPromise<Schema$CountriesListResponse>;
        list(params: Params$Resource$Countries$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Countries$List, options: MethodOptions | BodyResponseCallback<Schema$CountriesListResponse>, callback: BodyResponseCallback<Schema$CountriesListResponse>): void;
        list(params: Params$Resource$Countries$List, callback: BodyResponseCallback<Schema$CountriesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CountriesListResponse>): void;
    }
    export interface Params$Resource$Countries$Get extends StandardParameters {
        /**
         * Country DART ID.
         */
        dartId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Countries$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Creativeassets {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Inserts a new creative asset.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Creativeassets$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Creativeassets$Insert, options?: MethodOptions): GaxiosPromise<Schema$CreativeAssetMetadata>;
        insert(params: Params$Resource$Creativeassets$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Creativeassets$Insert, options: MethodOptions | BodyResponseCallback<Schema$CreativeAssetMetadata>, callback: BodyResponseCallback<Schema$CreativeAssetMetadata>): void;
        insert(params: Params$Resource$Creativeassets$Insert, callback: BodyResponseCallback<Schema$CreativeAssetMetadata>): void;
        insert(callback: BodyResponseCallback<Schema$CreativeAssetMetadata>): void;
    }
    export interface Params$Resource$Creativeassets$Insert extends StandardParameters {
        /**
         * Advertiser ID of this creative. This is a required field.
         */
        advertiserId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeAssetMetadata;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export class Resource$Creativefields {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing creative field.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Creativefields$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Creativefields$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Creativefields$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Creativefields$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Creativefields$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one creative field by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Creativefields$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Creativefields$Get, options?: MethodOptions): GaxiosPromise<Schema$CreativeField>;
        get(params: Params$Resource$Creativefields$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Creativefields$Get, options: MethodOptions | BodyResponseCallback<Schema$CreativeField>, callback: BodyResponseCallback<Schema$CreativeField>): void;
        get(params: Params$Resource$Creativefields$Get, callback: BodyResponseCallback<Schema$CreativeField>): void;
        get(callback: BodyResponseCallback<Schema$CreativeField>): void;
        /**
         * Inserts a new creative field.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Creativefields$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Creativefields$Insert, options?: MethodOptions): GaxiosPromise<Schema$CreativeField>;
        insert(params: Params$Resource$Creativefields$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Creativefields$Insert, options: MethodOptions | BodyResponseCallback<Schema$CreativeField>, callback: BodyResponseCallback<Schema$CreativeField>): void;
        insert(params: Params$Resource$Creativefields$Insert, callback: BodyResponseCallback<Schema$CreativeField>): void;
        insert(callback: BodyResponseCallback<Schema$CreativeField>): void;
        /**
         * Retrieves a list of creative fields, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Creativefields$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Creativefields$List, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldsListResponse>;
        list(params: Params$Resource$Creativefields$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Creativefields$List, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldsListResponse>, callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>): void;
        list(params: Params$Resource$Creativefields$List, callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>): void;
        /**
         * Updates an existing creative field. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Creativefields$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Creativefields$Patch, options?: MethodOptions): GaxiosPromise<Schema$CreativeField>;
        patch(params: Params$Resource$Creativefields$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Creativefields$Patch, options: MethodOptions | BodyResponseCallback<Schema$CreativeField>, callback: BodyResponseCallback<Schema$CreativeField>): void;
        patch(params: Params$Resource$Creativefields$Patch, callback: BodyResponseCallback<Schema$CreativeField>): void;
        patch(callback: BodyResponseCallback<Schema$CreativeField>): void;
        /**
         * Updates an existing creative field.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Creativefields$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Creativefields$Update, options?: MethodOptions): GaxiosPromise<Schema$CreativeField>;
        update(params: Params$Resource$Creativefields$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Creativefields$Update, options: MethodOptions | BodyResponseCallback<Schema$CreativeField>, callback: BodyResponseCallback<Schema$CreativeField>): void;
        update(params: Params$Resource$Creativefields$Update, callback: BodyResponseCallback<Schema$CreativeField>): void;
        update(callback: BodyResponseCallback<Schema$CreativeField>): void;
    }
    export interface Params$Resource$Creativefields$Delete extends StandardParameters {
        /**
         * Creative Field ID
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creativefields$Get extends StandardParameters {
        /**
         * Creative Field ID
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creativefields$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeField;
    }
    export interface Params$Resource$Creativefields$List extends StandardParameters {
        /**
         * Select only creative fields that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only creative fields with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Creativefields$Patch extends StandardParameters {
        /**
         * CreativeField ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeField;
    }
    export interface Params$Resource$Creativefields$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeField;
    }
    export class Resource$Creativefieldvalues {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing creative field value.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Creativefieldvalues$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Creativefieldvalues$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Creativefieldvalues$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Creativefieldvalues$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Creativefieldvalues$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one creative field value by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Creativefieldvalues$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Creativefieldvalues$Get, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldValue>;
        get(params: Params$Resource$Creativefieldvalues$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Creativefieldvalues$Get, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        get(params: Params$Resource$Creativefieldvalues$Get, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        get(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        /**
         * Inserts a new creative field value.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Creativefieldvalues$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Creativefieldvalues$Insert, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldValue>;
        insert(params: Params$Resource$Creativefieldvalues$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Creativefieldvalues$Insert, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        insert(params: Params$Resource$Creativefieldvalues$Insert, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        insert(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        /**
         * Retrieves a list of creative field values, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Creativefieldvalues$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Creativefieldvalues$List, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldValuesListResponse>;
        list(params: Params$Resource$Creativefieldvalues$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Creativefieldvalues$List, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValuesListResponse>, callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>): void;
        list(params: Params$Resource$Creativefieldvalues$List, callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>): void;
        /**
         * Updates an existing creative field value. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Creativefieldvalues$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Creativefieldvalues$Patch, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldValue>;
        patch(params: Params$Resource$Creativefieldvalues$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Creativefieldvalues$Patch, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        patch(params: Params$Resource$Creativefieldvalues$Patch, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        patch(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        /**
         * Updates an existing creative field value.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Creativefieldvalues$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Creativefieldvalues$Update, options?: MethodOptions): GaxiosPromise<Schema$CreativeFieldValue>;
        update(params: Params$Resource$Creativefieldvalues$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Creativefieldvalues$Update, options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        update(params: Params$Resource$Creativefieldvalues$Update, callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
        update(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
    }
    export interface Params$Resource$Creativefieldvalues$Delete extends StandardParameters {
        /**
         * Creative field ID for this creative field value.
         */
        creativeFieldId?: string;
        /**
         * Creative Field Value ID
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creativefieldvalues$Get extends StandardParameters {
        /**
         * Creative field ID for this creative field value.
         */
        creativeFieldId?: string;
        /**
         * Creative Field Value ID
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creativefieldvalues$Insert extends StandardParameters {
        /**
         * Creative field ID for this creative field value.
         */
        creativeFieldId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeFieldValue;
    }
    export interface Params$Resource$Creativefieldvalues$List extends StandardParameters {
        /**
         * Creative field ID for this creative field value.
         */
        creativeFieldId?: string;
        /**
         * Select only creative field values with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Creativefieldvalues$Patch extends StandardParameters {
        /**
         * CreativeField ID.
         */
        creativeFieldId?: string;
        /**
         * CreativeFieldValue ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeFieldValue;
    }
    export interface Params$Resource$Creativefieldvalues$Update extends StandardParameters {
        /**
         * Creative field ID for this creative field value.
         */
        creativeFieldId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeFieldValue;
    }
    export class Resource$Creativegroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one creative group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Creativegroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Creativegroups$Get, options?: MethodOptions): GaxiosPromise<Schema$CreativeGroup>;
        get(params: Params$Resource$Creativegroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Creativegroups$Get, options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        get(params: Params$Resource$Creativegroups$Get, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        get(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        /**
         * Inserts a new creative group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Creativegroups$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Creativegroups$Insert, options?: MethodOptions): GaxiosPromise<Schema$CreativeGroup>;
        insert(params: Params$Resource$Creativegroups$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Creativegroups$Insert, options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        insert(params: Params$Resource$Creativegroups$Insert, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        insert(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        /**
         * Retrieves a list of creative groups, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Creativegroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Creativegroups$List, options?: MethodOptions): GaxiosPromise<Schema$CreativeGroupsListResponse>;
        list(params: Params$Resource$Creativegroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Creativegroups$List, options: MethodOptions | BodyResponseCallback<Schema$CreativeGroupsListResponse>, callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>): void;
        list(params: Params$Resource$Creativegroups$List, callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>): void;
        /**
         * Updates an existing creative group. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Creativegroups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Creativegroups$Patch, options?: MethodOptions): GaxiosPromise<Schema$CreativeGroup>;
        patch(params: Params$Resource$Creativegroups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Creativegroups$Patch, options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        patch(params: Params$Resource$Creativegroups$Patch, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        patch(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        /**
         * Updates an existing creative group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Creativegroups$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Creativegroups$Update, options?: MethodOptions): GaxiosPromise<Schema$CreativeGroup>;
        update(params: Params$Resource$Creativegroups$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Creativegroups$Update, options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        update(params: Params$Resource$Creativegroups$Update, callback: BodyResponseCallback<Schema$CreativeGroup>): void;
        update(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
    }
    export interface Params$Resource$Creativegroups$Get extends StandardParameters {
        /**
         * Creative group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creativegroups$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeGroup;
    }
    export interface Params$Resource$Creativegroups$List extends StandardParameters {
        /**
         * Select only creative groups that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only creative groups that belong to this subgroup.
         */
        groupNumber?: number;
        /**
         * Select only creative groups with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Creativegroups$Patch extends StandardParameters {
        /**
         * Required. Creative Group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeGroup;
    }
    export interface Params$Resource$Creativegroups$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreativeGroup;
    }
    export class Resource$Creatives {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one creative by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Creatives$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Creatives$Get, options?: MethodOptions): GaxiosPromise<Schema$Creative>;
        get(params: Params$Resource$Creatives$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Creatives$Get, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        get(params: Params$Resource$Creatives$Get, callback: BodyResponseCallback<Schema$Creative>): void;
        get(callback: BodyResponseCallback<Schema$Creative>): void;
        /**
         * Inserts a new creative.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Creatives$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Creatives$Insert, options?: MethodOptions): GaxiosPromise<Schema$Creative>;
        insert(params: Params$Resource$Creatives$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Creatives$Insert, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        insert(params: Params$Resource$Creatives$Insert, callback: BodyResponseCallback<Schema$Creative>): void;
        insert(callback: BodyResponseCallback<Schema$Creative>): void;
        /**
         * Retrieves a list of creatives, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Creatives$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Creatives$List, options?: MethodOptions): GaxiosPromise<Schema$CreativesListResponse>;
        list(params: Params$Resource$Creatives$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Creatives$List, options: MethodOptions | BodyResponseCallback<Schema$CreativesListResponse>, callback: BodyResponseCallback<Schema$CreativesListResponse>): void;
        list(params: Params$Resource$Creatives$List, callback: BodyResponseCallback<Schema$CreativesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$CreativesListResponse>): void;
        /**
         * Updates an existing creative. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Creatives$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Creatives$Patch, options?: MethodOptions): GaxiosPromise<Schema$Creative>;
        patch(params: Params$Resource$Creatives$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Creatives$Patch, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        patch(params: Params$Resource$Creatives$Patch, callback: BodyResponseCallback<Schema$Creative>): void;
        patch(callback: BodyResponseCallback<Schema$Creative>): void;
        /**
         * Updates an existing creative.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Creatives$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Creatives$Update, options?: MethodOptions): GaxiosPromise<Schema$Creative>;
        update(params: Params$Resource$Creatives$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Creatives$Update, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        update(params: Params$Resource$Creatives$Update, callback: BodyResponseCallback<Schema$Creative>): void;
        update(callback: BodyResponseCallback<Schema$Creative>): void;
    }
    export interface Params$Resource$Creatives$Get extends StandardParameters {
        /**
         * Creative ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Creatives$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Creative;
    }
    export interface Params$Resource$Creatives$List extends StandardParameters {
        /**
         * Select only active creatives. Leave blank to select active and inactive creatives.
         */
        active?: boolean;
        /**
         * Select only creatives with this advertiser ID.
         */
        advertiserId?: string;
        /**
         * Select only archived creatives. Leave blank to select archived and unarchived creatives.
         */
        archived?: boolean;
        /**
         * Select only creatives with this campaign ID.
         */
        campaignId?: string;
        /**
         * Select only in-stream video creatives with these companion IDs.
         */
        companionCreativeIds?: string[];
        /**
         * Select only creatives with these creative field IDs.
         */
        creativeFieldIds?: string[];
        /**
         * Select only creatives with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Select only creatives with these rendering IDs.
         */
        renderingIds?: string[];
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
         */
        searchString?: string;
        /**
         * Select only creatives with these size IDs.
         */
        sizeIds?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only creatives corresponding to this Studio creative ID.
         */
        studioCreativeId?: string;
        /**
         * Select only creatives with these creative types.
         */
        types?: string[];
    }
    export interface Params$Resource$Creatives$Patch extends StandardParameters {
        /**
         * Required. Creative ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Creative;
    }
    export interface Params$Resource$Creatives$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Creative;
    }
    export class Resource$Dimensionvalues {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves list of report dimension values for a list of filters.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        query(params: Params$Resource$Dimensionvalues$Query, options: StreamMethodOptions): GaxiosPromise<Readable>;
        query(params?: Params$Resource$Dimensionvalues$Query, options?: MethodOptions): GaxiosPromise<Schema$DimensionValueList>;
        query(params: Params$Resource$Dimensionvalues$Query, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        query(params: Params$Resource$Dimensionvalues$Query, options: MethodOptions | BodyResponseCallback<Schema$DimensionValueList>, callback: BodyResponseCallback<Schema$DimensionValueList>): void;
        query(params: Params$Resource$Dimensionvalues$Query, callback: BodyResponseCallback<Schema$DimensionValueList>): void;
        query(callback: BodyResponseCallback<Schema$DimensionValueList>): void;
    }
    export interface Params$Resource$Dimensionvalues$Query extends StandardParameters {
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * The value of the nextToken from the previous result page.
         */
        pageToken?: string;
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DimensionValueRequest;
    }
    export class Resource$Directorysites {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one directory site by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Directorysites$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Directorysites$Get, options?: MethodOptions): GaxiosPromise<Schema$DirectorySite>;
        get(params: Params$Resource$Directorysites$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Directorysites$Get, options: MethodOptions | BodyResponseCallback<Schema$DirectorySite>, callback: BodyResponseCallback<Schema$DirectorySite>): void;
        get(params: Params$Resource$Directorysites$Get, callback: BodyResponseCallback<Schema$DirectorySite>): void;
        get(callback: BodyResponseCallback<Schema$DirectorySite>): void;
        /**
         * Inserts a new directory site.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Directorysites$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Directorysites$Insert, options?: MethodOptions): GaxiosPromise<Schema$DirectorySite>;
        insert(params: Params$Resource$Directorysites$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Directorysites$Insert, options: MethodOptions | BodyResponseCallback<Schema$DirectorySite>, callback: BodyResponseCallback<Schema$DirectorySite>): void;
        insert(params: Params$Resource$Directorysites$Insert, callback: BodyResponseCallback<Schema$DirectorySite>): void;
        insert(callback: BodyResponseCallback<Schema$DirectorySite>): void;
        /**
         * Retrieves a list of directory sites, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Directorysites$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Directorysites$List, options?: MethodOptions): GaxiosPromise<Schema$DirectorySitesListResponse>;
        list(params: Params$Resource$Directorysites$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Directorysites$List, options: MethodOptions | BodyResponseCallback<Schema$DirectorySitesListResponse>, callback: BodyResponseCallback<Schema$DirectorySitesListResponse>): void;
        list(params: Params$Resource$Directorysites$List, callback: BodyResponseCallback<Schema$DirectorySitesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DirectorySitesListResponse>): void;
    }
    export interface Params$Resource$Directorysites$Get extends StandardParameters {
        /**
         * Directory site ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Directorysites$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DirectorySite;
    }
    export interface Params$Resource$Directorysites$List extends StandardParameters {
        /**
         * This search filter is no longer supported and will have no effect on the results returned.
         */
        acceptsInStreamVideoPlacements?: boolean;
        /**
         * This search filter is no longer supported and will have no effect on the results returned.
         */
        acceptsInterstitialPlacements?: boolean;
        /**
         * Select only directory sites that accept publisher paid placements. This field can be left blank.
         */
        acceptsPublisherPaidPlacements?: boolean;
        /**
         * Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
         */
        active?: boolean;
        /**
         * Select only directory sites with this Ad Manager network code.
         */
        dfpNetworkCode?: string;
        /**
         * Select only directory sites with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Dynamictargetingkeys {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing dynamic targeting key.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Dynamictargetingkeys$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Dynamictargetingkeys$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Dynamictargetingkeys$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Dynamictargetingkeys$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Dynamictargetingkeys$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Dynamictargetingkeys$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Dynamictargetingkeys$Insert, options?: MethodOptions): GaxiosPromise<Schema$DynamicTargetingKey>;
        insert(params: Params$Resource$Dynamictargetingkeys$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Dynamictargetingkeys$Insert, options: MethodOptions | BodyResponseCallback<Schema$DynamicTargetingKey>, callback: BodyResponseCallback<Schema$DynamicTargetingKey>): void;
        insert(params: Params$Resource$Dynamictargetingkeys$Insert, callback: BodyResponseCallback<Schema$DynamicTargetingKey>): void;
        insert(callback: BodyResponseCallback<Schema$DynamicTargetingKey>): void;
        /**
         * Retrieves a list of dynamic targeting keys.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Dynamictargetingkeys$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Dynamictargetingkeys$List, options?: MethodOptions): GaxiosPromise<Schema$DynamicTargetingKeysListResponse>;
        list(params: Params$Resource$Dynamictargetingkeys$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Dynamictargetingkeys$List, options: MethodOptions | BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>, callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>): void;
        list(params: Params$Resource$Dynamictargetingkeys$List, callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>): void;
        list(callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>): void;
    }
    export interface Params$Resource$Dynamictargetingkeys$Delete extends StandardParameters {
        /**
         * Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
         */
        name?: string;
        /**
         * ID of the object of this dynamic targeting key. This is a required field.
         */
        objectId?: string;
        /**
         * Required. Type of the object of this dynamic targeting key. This is a required field.
         */
        objectType?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Dynamictargetingkeys$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DynamicTargetingKey;
    }
    export interface Params$Resource$Dynamictargetingkeys$List extends StandardParameters {
        /**
         * Select only dynamic targeting keys whose object has this advertiser ID.
         */
        advertiserId?: string;
        /**
         * Select only dynamic targeting keys exactly matching these names.
         */
        names?: string[];
        /**
         * Select only dynamic targeting keys with this object ID.
         */
        objectId?: string;
        /**
         * Select only dynamic targeting keys with this object type.
         */
        objectType?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Eventtags {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing event tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Eventtags$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Eventtags$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Eventtags$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Eventtags$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Eventtags$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one event tag by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Eventtags$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Eventtags$Get, options?: MethodOptions): GaxiosPromise<Schema$EventTag>;
        get(params: Params$Resource$Eventtags$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Eventtags$Get, options: MethodOptions | BodyResponseCallback<Schema$EventTag>, callback: BodyResponseCallback<Schema$EventTag>): void;
        get(params: Params$Resource$Eventtags$Get, callback: BodyResponseCallback<Schema$EventTag>): void;
        get(callback: BodyResponseCallback<Schema$EventTag>): void;
        /**
         * Inserts a new event tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Eventtags$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Eventtags$Insert, options?: MethodOptions): GaxiosPromise<Schema$EventTag>;
        insert(params: Params$Resource$Eventtags$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Eventtags$Insert, options: MethodOptions | BodyResponseCallback<Schema$EventTag>, callback: BodyResponseCallback<Schema$EventTag>): void;
        insert(params: Params$Resource$Eventtags$Insert, callback: BodyResponseCallback<Schema$EventTag>): void;
        insert(callback: BodyResponseCallback<Schema$EventTag>): void;
        /**
         * Retrieves a list of event tags, possibly filtered.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Eventtags$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Eventtags$List, options?: MethodOptions): GaxiosPromise<Schema$EventTagsListResponse>;
        list(params: Params$Resource$Eventtags$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Eventtags$List, options: MethodOptions | BodyResponseCallback<Schema$EventTagsListResponse>, callback: BodyResponseCallback<Schema$EventTagsListResponse>): void;
        list(params: Params$Resource$Eventtags$List, callback: BodyResponseCallback<Schema$EventTagsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$EventTagsListResponse>): void;
        /**
         * Updates an existing event tag. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Eventtags$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Eventtags$Patch, options?: MethodOptions): GaxiosPromise<Schema$EventTag>;
        patch(params: Params$Resource$Eventtags$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Eventtags$Patch, options: MethodOptions | BodyResponseCallback<Schema$EventTag>, callback: BodyResponseCallback<Schema$EventTag>): void;
        patch(params: Params$Resource$Eventtags$Patch, callback: BodyResponseCallback<Schema$EventTag>): void;
        patch(callback: BodyResponseCallback<Schema$EventTag>): void;
        /**
         * Updates an existing event tag.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Eventtags$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Eventtags$Update, options?: MethodOptions): GaxiosPromise<Schema$EventTag>;
        update(params: Params$Resource$Eventtags$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Eventtags$Update, options: MethodOptions | BodyResponseCallback<Schema$EventTag>, callback: BodyResponseCallback<Schema$EventTag>): void;
        update(params: Params$Resource$Eventtags$Update, callback: BodyResponseCallback<Schema$EventTag>): void;
        update(callback: BodyResponseCallback<Schema$EventTag>): void;
    }
    export interface Params$Resource$Eventtags$Delete extends StandardParameters {
        /**
         * Event tag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Eventtags$Get extends StandardParameters {
        /**
         * Event tag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Eventtags$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EventTag;
    }
    export interface Params$Resource$Eventtags$List extends StandardParameters {
        /**
         * Select only event tags that belong to this ad.
         */
        adId?: string;
        /**
         * Select only event tags that belong to this advertiser.
         */
        advertiserId?: string;
        /**
         * Select only event tags that belong to this campaign.
         */
        campaignId?: string;
        /**
         * Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
         */
        definitionsOnly?: boolean;
        /**
         * Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
         */
        enabled?: boolean;
        /**
         * Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
         */
        eventTagTypes?: string[];
        /**
         * Select only event tags with these IDs.
         */
        ids?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Eventtags$Patch extends StandardParameters {
        /**
         * Required. EventTag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EventTag;
    }
    export interface Params$Resource$Eventtags$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EventTag;
    }
    export class Resource$Files {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a report file by its report ID and file ID. This method supports media download.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Files$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Files$Get, options?: MethodOptions): GaxiosPromise<Schema$File>;
        get(params: Params$Resource$Files$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Files$Get, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        get(params: Params$Resource$Files$Get, callback: BodyResponseCallback<Schema$File>): void;
        get(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * Lists files for a user profile.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Files$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Files$List, options?: MethodOptions): GaxiosPromise<Schema$FileList>;
        list(params: Params$Resource$Files$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Files$List, options: MethodOptions | BodyResponseCallback<Schema$FileList>, callback: BodyResponseCallback<Schema$FileList>): void;
        list(params: Params$Resource$Files$List, callback: BodyResponseCallback<Schema$FileList>): void;
        list(callback: BodyResponseCallback<Schema$FileList>): void;
    }
    export interface Params$Resource$Files$Get extends StandardParameters {
        /**
         * The ID of the report file.
         */
        fileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
    }
    export interface Params$Resource$Files$List extends StandardParameters {
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * The value of the nextToken from the previous result page.
         */
        pageToken?: string;
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The scope that defines which results are returned.
         */
        scope?: string;
        /**
         * The field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Floodlightactivities {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing floodlight activity.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Floodlightactivities$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Floodlightactivities$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Floodlightactivities$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Floodlightactivities$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Floodlightactivities$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Generates a tag for a floodlight activity.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generatetag(params: Params$Resource$Floodlightactivities$Generatetag, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generatetag(params?: Params$Resource$Floodlightactivities$Generatetag, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivitiesGenerateTagResponse>;
        generatetag(params: Params$Resource$Floodlightactivities$Generatetag, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generatetag(params: Params$Resource$Floodlightactivities$Generatetag, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>, callback: BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>): void;
        generatetag(params: Params$Resource$Floodlightactivities$Generatetag, callback: BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>): void;
        generatetag(callback: BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>): void;
        /**
         * Gets one floodlight activity by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Floodlightactivities$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Floodlightactivities$Get, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivity>;
        get(params: Params$Resource$Floodlightactivities$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Floodlightactivities$Get, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        get(params: Params$Resource$Floodlightactivities$Get, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        get(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        /**
         * Inserts a new floodlight activity.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Floodlightactivities$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Floodlightactivities$Insert, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivity>;
        insert(params: Params$Resource$Floodlightactivities$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Floodlightactivities$Insert, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        insert(params: Params$Resource$Floodlightactivities$Insert, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        insert(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        /**
         * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Floodlightactivities$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Floodlightactivities$List, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivitiesListResponse>;
        list(params: Params$Resource$Floodlightactivities$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Floodlightactivities$List, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivitiesListResponse>, callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>): void;
        list(params: Params$Resource$Floodlightactivities$List, callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>): void;
        /**
         * Updates an existing event tag. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Floodlightactivities$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Floodlightactivities$Patch, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivity>;
        patch(params: Params$Resource$Floodlightactivities$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Floodlightactivities$Patch, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        patch(params: Params$Resource$Floodlightactivities$Patch, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        patch(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        /**
         * Updates an existing floodlight activity.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Floodlightactivities$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Floodlightactivities$Update, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivity>;
        update(params: Params$Resource$Floodlightactivities$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Floodlightactivities$Update, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        update(params: Params$Resource$Floodlightactivities$Update, callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
        update(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
    }
    export interface Params$Resource$Floodlightactivities$Delete extends StandardParameters {
        /**
         * Floodlight activity ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightactivities$Generatetag extends StandardParameters {
        /**
         * Floodlight activity ID for which we want to generate a tag.
         */
        floodlightActivityId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightactivities$Get extends StandardParameters {
        /**
         * Floodlight activity ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightactivities$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivity;
    }
    export interface Params$Resource$Floodlightactivities$List extends StandardParameters {
        /**
         * Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         */
        advertiserId?: string;
        /**
         * Select only floodlight activities with the specified floodlight activity group IDs.
         */
        floodlightActivityGroupIds?: string[];
        /**
         * Select only floodlight activities with the specified floodlight activity group name.
         */
        floodlightActivityGroupName?: string;
        /**
         * Select only floodlight activities with the specified floodlight activity group tag string.
         */
        floodlightActivityGroupTagString?: string;
        /**
         * Select only floodlight activities with the specified floodlight activity group type.
         */
        floodlightActivityGroupType?: string;
        /**
         * Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         */
        floodlightConfigurationId?: string;
        /**
         * Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only floodlight activities with the specified tag string.
         */
        tagString?: string;
    }
    export interface Params$Resource$Floodlightactivities$Patch extends StandardParameters {
        /**
         * Required. EventTag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivity;
    }
    export interface Params$Resource$Floodlightactivities$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivity;
    }
    export class Resource$Floodlightactivitygroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one floodlight activity group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Floodlightactivitygroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Floodlightactivitygroups$Get, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivityGroup>;
        get(params: Params$Resource$Floodlightactivitygroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Floodlightactivitygroups$Get, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivityGroup>, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        get(params: Params$Resource$Floodlightactivitygroups$Get, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        get(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        /**
         * Inserts a new floodlight activity group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Floodlightactivitygroups$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Floodlightactivitygroups$Insert, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivityGroup>;
        insert(params: Params$Resource$Floodlightactivitygroups$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Floodlightactivitygroups$Insert, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivityGroup>, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        insert(params: Params$Resource$Floodlightactivitygroups$Insert, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        insert(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        /**
         * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Floodlightactivitygroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Floodlightactivitygroups$List, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivityGroupsListResponse>;
        list(params: Params$Resource$Floodlightactivitygroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Floodlightactivitygroups$List, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>, callback: BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>): void;
        list(params: Params$Resource$Floodlightactivitygroups$List, callback: BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>): void;
        /**
         * Updates an existing event tag. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Floodlightactivitygroups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Floodlightactivitygroups$Patch, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivityGroup>;
        patch(params: Params$Resource$Floodlightactivitygroups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Floodlightactivitygroups$Patch, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivityGroup>, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        patch(params: Params$Resource$Floodlightactivitygroups$Patch, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        patch(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        /**
         * Updates an existing floodlight activity group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Floodlightactivitygroups$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Floodlightactivitygroups$Update, options?: MethodOptions): GaxiosPromise<Schema$FloodlightActivityGroup>;
        update(params: Params$Resource$Floodlightactivitygroups$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Floodlightactivitygroups$Update, options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivityGroup>, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        update(params: Params$Resource$Floodlightactivitygroups$Update, callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
        update(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
    }
    export interface Params$Resource$Floodlightactivitygroups$Get extends StandardParameters {
        /**
         * Floodlight activity Group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightactivitygroups$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivityGroup;
    }
    export interface Params$Resource$Floodlightactivitygroups$List extends StandardParameters {
        /**
         * Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
         */
        advertiserId?: string;
        /**
         * Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
         */
        floodlightConfigurationId?: string;
        /**
         * Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only floodlight activity groups with the specified floodlight activity group type.
         */
        type?: string;
    }
    export interface Params$Resource$Floodlightactivitygroups$Patch extends StandardParameters {
        /**
         * Required. EventTag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivityGroup;
    }
    export interface Params$Resource$Floodlightactivitygroups$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightActivityGroup;
    }
    export class Resource$Floodlightconfigurations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one floodlight configuration by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Floodlightconfigurations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Floodlightconfigurations$Get, options?: MethodOptions): GaxiosPromise<Schema$FloodlightConfiguration>;
        get(params: Params$Resource$Floodlightconfigurations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Floodlightconfigurations$Get, options: MethodOptions | BodyResponseCallback<Schema$FloodlightConfiguration>, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        get(params: Params$Resource$Floodlightconfigurations$Get, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        get(callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        /**
         * Retrieves a list of floodlight configurations, possibly filtered.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Floodlightconfigurations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Floodlightconfigurations$List, options?: MethodOptions): GaxiosPromise<Schema$FloodlightConfigurationsListResponse>;
        list(params: Params$Resource$Floodlightconfigurations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Floodlightconfigurations$List, options: MethodOptions | BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>, callback: BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>): void;
        list(params: Params$Resource$Floodlightconfigurations$List, callback: BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>): void;
        /**
         * Updates an existing event tag. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Floodlightconfigurations$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Floodlightconfigurations$Patch, options?: MethodOptions): GaxiosPromise<Schema$FloodlightConfiguration>;
        patch(params: Params$Resource$Floodlightconfigurations$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Floodlightconfigurations$Patch, options: MethodOptions | BodyResponseCallback<Schema$FloodlightConfiguration>, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        patch(params: Params$Resource$Floodlightconfigurations$Patch, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        patch(callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        /**
         * Updates an existing floodlight configuration.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Floodlightconfigurations$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Floodlightconfigurations$Update, options?: MethodOptions): GaxiosPromise<Schema$FloodlightConfiguration>;
        update(params: Params$Resource$Floodlightconfigurations$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Floodlightconfigurations$Update, options: MethodOptions | BodyResponseCallback<Schema$FloodlightConfiguration>, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        update(params: Params$Resource$Floodlightconfigurations$Update, callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
        update(callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
    }
    export interface Params$Resource$Floodlightconfigurations$Get extends StandardParameters {
        /**
         * Floodlight configuration ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightconfigurations$List extends StandardParameters {
        /**
         * Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
         */
        ids?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Floodlightconfigurations$Patch extends StandardParameters {
        /**
         * Required. EventTag ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightConfiguration;
    }
    export interface Params$Resource$Floodlightconfigurations$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FloodlightConfiguration;
    }
    export class Resource$Inventoryitems {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one inventory item by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Inventoryitems$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Inventoryitems$Get, options?: MethodOptions): GaxiosPromise<Schema$InventoryItem>;
        get(params: Params$Resource$Inventoryitems$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Inventoryitems$Get, options: MethodOptions | BodyResponseCallback<Schema$InventoryItem>, callback: BodyResponseCallback<Schema$InventoryItem>): void;
        get(params: Params$Resource$Inventoryitems$Get, callback: BodyResponseCallback<Schema$InventoryItem>): void;
        get(callback: BodyResponseCallback<Schema$InventoryItem>): void;
        /**
         * Retrieves a list of inventory items, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Inventoryitems$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Inventoryitems$List, options?: MethodOptions): GaxiosPromise<Schema$InventoryItemsListResponse>;
        list(params: Params$Resource$Inventoryitems$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Inventoryitems$List, options: MethodOptions | BodyResponseCallback<Schema$InventoryItemsListResponse>, callback: BodyResponseCallback<Schema$InventoryItemsListResponse>): void;
        list(params: Params$Resource$Inventoryitems$List, callback: BodyResponseCallback<Schema$InventoryItemsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$InventoryItemsListResponse>): void;
    }
    export interface Params$Resource$Inventoryitems$Get extends StandardParameters {
        /**
         * Inventory item ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Project ID for order documents.
         */
        projectId?: string;
    }
    export interface Params$Resource$Inventoryitems$List extends StandardParameters {
        /**
         * Select only inventory items with these IDs.
         */
        ids?: string[];
        /**
         * Select only inventory items that are in plan.
         */
        inPlan?: boolean;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only inventory items that belong to specified orders.
         */
        orderId?: string[];
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Project ID for order documents.
         */
        projectId?: string;
        /**
         * Select only inventory items that are associated with these sites.
         */
        siteId?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only inventory items with this type.
         */
        type?: string;
    }
    export class Resource$Languages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of languages.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Languages$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Languages$List, options?: MethodOptions): GaxiosPromise<Schema$LanguagesListResponse>;
        list(params: Params$Resource$Languages$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Languages$List, options: MethodOptions | BodyResponseCallback<Schema$LanguagesListResponse>, callback: BodyResponseCallback<Schema$LanguagesListResponse>): void;
        list(params: Params$Resource$Languages$List, callback: BodyResponseCallback<Schema$LanguagesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$LanguagesListResponse>): void;
    }
    export interface Params$Resource$Languages$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Metros {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of metros.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Metros$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Metros$List, options?: MethodOptions): GaxiosPromise<Schema$MetrosListResponse>;
        list(params: Params$Resource$Metros$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Metros$List, options: MethodOptions | BodyResponseCallback<Schema$MetrosListResponse>, callback: BodyResponseCallback<Schema$MetrosListResponse>): void;
        list(params: Params$Resource$Metros$List, callback: BodyResponseCallback<Schema$MetrosListResponse>): void;
        list(callback: BodyResponseCallback<Schema$MetrosListResponse>): void;
    }
    export interface Params$Resource$Metros$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Mobileapps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one mobile app by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Mobileapps$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Mobileapps$Get, options?: MethodOptions): GaxiosPromise<Schema$MobileApp>;
        get(params: Params$Resource$Mobileapps$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Mobileapps$Get, options: MethodOptions | BodyResponseCallback<Schema$MobileApp>, callback: BodyResponseCallback<Schema$MobileApp>): void;
        get(params: Params$Resource$Mobileapps$Get, callback: BodyResponseCallback<Schema$MobileApp>): void;
        get(callback: BodyResponseCallback<Schema$MobileApp>): void;
        /**
         * Retrieves list of available mobile apps.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Mobileapps$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Mobileapps$List, options?: MethodOptions): GaxiosPromise<Schema$MobileAppsListResponse>;
        list(params: Params$Resource$Mobileapps$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Mobileapps$List, options: MethodOptions | BodyResponseCallback<Schema$MobileAppsListResponse>, callback: BodyResponseCallback<Schema$MobileAppsListResponse>): void;
        list(params: Params$Resource$Mobileapps$List, callback: BodyResponseCallback<Schema$MobileAppsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$MobileAppsListResponse>): void;
    }
    export interface Params$Resource$Mobileapps$Get extends StandardParameters {
        /**
         * Mobile app ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Mobileapps$List extends StandardParameters {
        /**
         * Select only apps from these directories.
         */
        directories?: string[];
        /**
         * Select only apps with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
         */
        searchString?: string;
    }
    export class Resource$Mobilecarriers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one mobile carrier by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Mobilecarriers$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Mobilecarriers$Get, options?: MethodOptions): GaxiosPromise<Schema$MobileCarrier>;
        get(params: Params$Resource$Mobilecarriers$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Mobilecarriers$Get, options: MethodOptions | BodyResponseCallback<Schema$MobileCarrier>, callback: BodyResponseCallback<Schema$MobileCarrier>): void;
        get(params: Params$Resource$Mobilecarriers$Get, callback: BodyResponseCallback<Schema$MobileCarrier>): void;
        get(callback: BodyResponseCallback<Schema$MobileCarrier>): void;
        /**
         * Retrieves a list of mobile carriers.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Mobilecarriers$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Mobilecarriers$List, options?: MethodOptions): GaxiosPromise<Schema$MobileCarriersListResponse>;
        list(params: Params$Resource$Mobilecarriers$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Mobilecarriers$List, options: MethodOptions | BodyResponseCallback<Schema$MobileCarriersListResponse>, callback: BodyResponseCallback<Schema$MobileCarriersListResponse>): void;
        list(params: Params$Resource$Mobilecarriers$List, callback: BodyResponseCallback<Schema$MobileCarriersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$MobileCarriersListResponse>): void;
    }
    export interface Params$Resource$Mobilecarriers$Get extends StandardParameters {
        /**
         * Mobile carrier ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Mobilecarriers$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Operatingsystems {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one operating system by DART ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Operatingsystems$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Operatingsystems$Get, options?: MethodOptions): GaxiosPromise<Schema$OperatingSystem>;
        get(params: Params$Resource$Operatingsystems$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Operatingsystems$Get, options: MethodOptions | BodyResponseCallback<Schema$OperatingSystem>, callback: BodyResponseCallback<Schema$OperatingSystem>): void;
        get(params: Params$Resource$Operatingsystems$Get, callback: BodyResponseCallback<Schema$OperatingSystem>): void;
        get(callback: BodyResponseCallback<Schema$OperatingSystem>): void;
        /**
         * Retrieves a list of operating systems.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Operatingsystems$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Operatingsystems$List, options?: MethodOptions): GaxiosPromise<Schema$OperatingSystemsListResponse>;
        list(params: Params$Resource$Operatingsystems$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Operatingsystems$List, options: MethodOptions | BodyResponseCallback<Schema$OperatingSystemsListResponse>, callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>): void;
        list(params: Params$Resource$Operatingsystems$List, callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>): void;
    }
    export interface Params$Resource$Operatingsystems$Get extends StandardParameters {
        /**
         * Operating system DART ID.
         */
        dartId?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Operatingsystems$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Operatingsystemversions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one operating system version by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Operatingsystemversions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Operatingsystemversions$Get, options?: MethodOptions): GaxiosPromise<Schema$OperatingSystemVersion>;
        get(params: Params$Resource$Operatingsystemversions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Operatingsystemversions$Get, options: MethodOptions | BodyResponseCallback<Schema$OperatingSystemVersion>, callback: BodyResponseCallback<Schema$OperatingSystemVersion>): void;
        get(params: Params$Resource$Operatingsystemversions$Get, callback: BodyResponseCallback<Schema$OperatingSystemVersion>): void;
        get(callback: BodyResponseCallback<Schema$OperatingSystemVersion>): void;
        /**
         * Retrieves a list of operating system versions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Operatingsystemversions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Operatingsystemversions$List, options?: MethodOptions): GaxiosPromise<Schema$OperatingSystemVersionsListResponse>;
        list(params: Params$Resource$Operatingsystemversions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Operatingsystemversions$List, options: MethodOptions | BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>, callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>): void;
        list(params: Params$Resource$Operatingsystemversions$List, callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>): void;
    }
    export interface Params$Resource$Operatingsystemversions$Get extends StandardParameters {
        /**
         * Operating system version ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Operatingsystemversions$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Orders {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one order by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Orders$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Orders$Get, options?: MethodOptions): GaxiosPromise<Schema$Order>;
        get(params: Params$Resource$Orders$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Orders$Get, options: MethodOptions | BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
        get(params: Params$Resource$Orders$Get, callback: BodyResponseCallback<Schema$Order>): void;
        get(callback: BodyResponseCallback<Schema$Order>): void;
        /**
         * Retrieves a list of orders, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Orders$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Orders$List, options?: MethodOptions): GaxiosPromise<Schema$OrdersListResponse>;
        list(params: Params$Resource$Orders$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Orders$List, options: MethodOptions | BodyResponseCallback<Schema$OrdersListResponse>, callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
        list(params: Params$Resource$Orders$List, callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
        list(callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
    }
    export interface Params$Resource$Orders$Get extends StandardParameters {
        /**
         * Order ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Project ID for orders.
         */
        projectId?: string;
    }
    export interface Params$Resource$Orders$List extends StandardParameters {
        /**
         * Select only orders with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Project ID for orders.
         */
        projectId?: string;
        /**
         * Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
         */
        searchString?: string;
        /**
         * Select only orders that are associated with these site IDs.
         */
        siteId?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Placementgroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one placement group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Placementgroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Placementgroups$Get, options?: MethodOptions): GaxiosPromise<Schema$PlacementGroup>;
        get(params: Params$Resource$Placementgroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Placementgroups$Get, options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        get(params: Params$Resource$Placementgroups$Get, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        get(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        /**
         * Inserts a new placement group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Placementgroups$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Placementgroups$Insert, options?: MethodOptions): GaxiosPromise<Schema$PlacementGroup>;
        insert(params: Params$Resource$Placementgroups$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Placementgroups$Insert, options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        insert(params: Params$Resource$Placementgroups$Insert, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        insert(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        /**
         * Retrieves a list of placement groups, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Placementgroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Placementgroups$List, options?: MethodOptions): GaxiosPromise<Schema$PlacementGroupsListResponse>;
        list(params: Params$Resource$Placementgroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Placementgroups$List, options: MethodOptions | BodyResponseCallback<Schema$PlacementGroupsListResponse>, callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>): void;
        list(params: Params$Resource$Placementgroups$List, callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>): void;
        /**
         * Updates an existing placement group. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Placementgroups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Placementgroups$Patch, options?: MethodOptions): GaxiosPromise<Schema$PlacementGroup>;
        patch(params: Params$Resource$Placementgroups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Placementgroups$Patch, options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        patch(params: Params$Resource$Placementgroups$Patch, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        patch(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        /**
         * Updates an existing placement group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Placementgroups$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Placementgroups$Update, options?: MethodOptions): GaxiosPromise<Schema$PlacementGroup>;
        update(params: Params$Resource$Placementgroups$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Placementgroups$Update, options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        update(params: Params$Resource$Placementgroups$Update, callback: BodyResponseCallback<Schema$PlacementGroup>): void;
        update(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
    }
    export interface Params$Resource$Placementgroups$Get extends StandardParameters {
        /**
         * Placement group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Placementgroups$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementGroup;
    }
    export interface Params$Resource$Placementgroups$List extends StandardParameters {
        /**
         * Select only placements with these active statuses.
         */
        activeStatus?: string[];
        /**
         * Select only placement groups that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only placement groups that belong to these campaigns.
         */
        campaignIds?: string[];
        /**
         * Select only placement groups that are associated with these content categories.
         */
        contentCategoryIds?: string[];
        /**
         * Select only placement groups that are associated with these directory sites.
         */
        directorySiteIds?: string[];
        /**
         * Select only placement groups with these IDs.
         */
        ids?: string[];
        /**
         * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
         */
        maxEndDate?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
         */
        maxStartDate?: string;
        /**
         * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
         */
        minEndDate?: string;
        /**
         * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
         */
        minStartDate?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
         */
        placementGroupType?: string;
        /**
         * Select only placement groups that are associated with these placement strategies.
         */
        placementStrategyIds?: string[];
        /**
         * Select only placement groups with these pricing types.
         */
        pricingTypes?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
         */
        searchString?: string;
        /**
         * Select only placement groups that are associated with these sites.
         */
        siteIds?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Placementgroups$Patch extends StandardParameters {
        /**
         * Required. Placement ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementGroup;
    }
    export interface Params$Resource$Placementgroups$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementGroup;
    }
    export class Resource$Placements {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Generates tags for a placement.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        generatetags(params: Params$Resource$Placements$Generatetags, options: StreamMethodOptions): GaxiosPromise<Readable>;
        generatetags(params?: Params$Resource$Placements$Generatetags, options?: MethodOptions): GaxiosPromise<Schema$PlacementsGenerateTagsResponse>;
        generatetags(params: Params$Resource$Placements$Generatetags, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        generatetags(params: Params$Resource$Placements$Generatetags, options: MethodOptions | BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>, callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>): void;
        generatetags(params: Params$Resource$Placements$Generatetags, callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>): void;
        generatetags(callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>): void;
        /**
         * Gets one placement by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Placements$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Placements$Get, options?: MethodOptions): GaxiosPromise<Schema$Placement>;
        get(params: Params$Resource$Placements$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Placements$Get, options: MethodOptions | BodyResponseCallback<Schema$Placement>, callback: BodyResponseCallback<Schema$Placement>): void;
        get(params: Params$Resource$Placements$Get, callback: BodyResponseCallback<Schema$Placement>): void;
        get(callback: BodyResponseCallback<Schema$Placement>): void;
        /**
         * Inserts a new placement.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Placements$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Placements$Insert, options?: MethodOptions): GaxiosPromise<Schema$Placement>;
        insert(params: Params$Resource$Placements$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Placements$Insert, options: MethodOptions | BodyResponseCallback<Schema$Placement>, callback: BodyResponseCallback<Schema$Placement>): void;
        insert(params: Params$Resource$Placements$Insert, callback: BodyResponseCallback<Schema$Placement>): void;
        insert(callback: BodyResponseCallback<Schema$Placement>): void;
        /**
         * Retrieves a list of placements, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Placements$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Placements$List, options?: MethodOptions): GaxiosPromise<Schema$PlacementsListResponse>;
        list(params: Params$Resource$Placements$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Placements$List, options: MethodOptions | BodyResponseCallback<Schema$PlacementsListResponse>, callback: BodyResponseCallback<Schema$PlacementsListResponse>): void;
        list(params: Params$Resource$Placements$List, callback: BodyResponseCallback<Schema$PlacementsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlacementsListResponse>): void;
        /**
         * Updates an existing placement. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Placements$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Placements$Patch, options?: MethodOptions): GaxiosPromise<Schema$Placement>;
        patch(params: Params$Resource$Placements$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Placements$Patch, options: MethodOptions | BodyResponseCallback<Schema$Placement>, callback: BodyResponseCallback<Schema$Placement>): void;
        patch(params: Params$Resource$Placements$Patch, callback: BodyResponseCallback<Schema$Placement>): void;
        patch(callback: BodyResponseCallback<Schema$Placement>): void;
        /**
         * Updates an existing placement.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Placements$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Placements$Update, options?: MethodOptions): GaxiosPromise<Schema$Placement>;
        update(params: Params$Resource$Placements$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Placements$Update, options: MethodOptions | BodyResponseCallback<Schema$Placement>, callback: BodyResponseCallback<Schema$Placement>): void;
        update(params: Params$Resource$Placements$Update, callback: BodyResponseCallback<Schema$Placement>): void;
        update(callback: BodyResponseCallback<Schema$Placement>): void;
    }
    export interface Params$Resource$Placements$Generatetags extends StandardParameters {
        /**
         * Generate placements belonging to this campaign. This is a required field.
         */
        campaignId?: string;
        /**
         * Generate tags for these placements.
         */
        placementIds?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
         */
        tagFormats?: string[];
    }
    export interface Params$Resource$Placements$Get extends StandardParameters {
        /**
         * Placement ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Placements$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Placement;
    }
    export interface Params$Resource$Placements$List extends StandardParameters {
        /**
         * Select only placements with these active statuses.
         */
        activeStatus?: string[];
        /**
         * Select only placements that belong to these advertisers.
         */
        advertiserIds?: string[];
        /**
         * Select only placements that belong to these campaigns.
         */
        campaignIds?: string[];
        /**
         * Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
         */
        compatibilities?: string[];
        /**
         * Select only placements that are associated with these content categories.
         */
        contentCategoryIds?: string[];
        /**
         * Select only placements that are associated with these directory sites.
         */
        directorySiteIds?: string[];
        /**
         * Select only placements that belong to these placement groups.
         */
        groupIds?: string[];
        /**
         * Select only placements with these IDs.
         */
        ids?: string[];
        /**
         * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
         */
        maxEndDate?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
         */
        maxStartDate?: string;
        /**
         * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
         */
        minEndDate?: string;
        /**
         * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
         */
        minStartDate?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * Select only placements with this payment source.
         */
        paymentSource?: string;
        /**
         * Select only placements that are associated with these placement strategies.
         */
        placementStrategyIds?: string[];
        /**
         * Select only placements with these pricing types.
         */
        pricingTypes?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
         */
        searchString?: string;
        /**
         * Select only placements that are associated with these sites.
         */
        siteIds?: string[];
        /**
         * Select only placements that are associated with these sizes.
         */
        sizeIds?: string[];
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Placements$Patch extends StandardParameters {
        /**
         * Required. Placement ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Placement;
    }
    export interface Params$Resource$Placements$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Placement;
    }
    export class Resource$Placementstrategies {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing placement strategy.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Placementstrategies$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Placementstrategies$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Placementstrategies$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Placementstrategies$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Placementstrategies$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one placement strategy by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Placementstrategies$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Placementstrategies$Get, options?: MethodOptions): GaxiosPromise<Schema$PlacementStrategy>;
        get(params: Params$Resource$Placementstrategies$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Placementstrategies$Get, options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        get(params: Params$Resource$Placementstrategies$Get, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        get(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        /**
         * Inserts a new placement strategy.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Placementstrategies$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Placementstrategies$Insert, options?: MethodOptions): GaxiosPromise<Schema$PlacementStrategy>;
        insert(params: Params$Resource$Placementstrategies$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Placementstrategies$Insert, options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        insert(params: Params$Resource$Placementstrategies$Insert, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        insert(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        /**
         * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Placementstrategies$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Placementstrategies$List, options?: MethodOptions): GaxiosPromise<Schema$PlacementStrategiesListResponse>;
        list(params: Params$Resource$Placementstrategies$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Placementstrategies$List, options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategiesListResponse>, callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>): void;
        list(params: Params$Resource$Placementstrategies$List, callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>): void;
        /**
         * Updates an existing placement strategy. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Placementstrategies$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Placementstrategies$Patch, options?: MethodOptions): GaxiosPromise<Schema$PlacementStrategy>;
        patch(params: Params$Resource$Placementstrategies$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Placementstrategies$Patch, options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        patch(params: Params$Resource$Placementstrategies$Patch, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        patch(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        /**
         * Updates an existing placement strategy.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Placementstrategies$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Placementstrategies$Update, options?: MethodOptions): GaxiosPromise<Schema$PlacementStrategy>;
        update(params: Params$Resource$Placementstrategies$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Placementstrategies$Update, options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        update(params: Params$Resource$Placementstrategies$Update, callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
        update(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
    }
    export interface Params$Resource$Placementstrategies$Delete extends StandardParameters {
        /**
         * Placement strategy ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Placementstrategies$Get extends StandardParameters {
        /**
         * Placement strategy ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Placementstrategies$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementStrategy;
    }
    export interface Params$Resource$Placementstrategies$List extends StandardParameters {
        /**
         * Select only placement strategies with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Placementstrategies$Patch extends StandardParameters {
        /**
         * Required. PlacementStrategy ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementStrategy;
    }
    export interface Params$Resource$Placementstrategies$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlacementStrategy;
    }
    export class Resource$Platformtypes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one platform type by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Platformtypes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Platformtypes$Get, options?: MethodOptions): GaxiosPromise<Schema$PlatformType>;
        get(params: Params$Resource$Platformtypes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Platformtypes$Get, options: MethodOptions | BodyResponseCallback<Schema$PlatformType>, callback: BodyResponseCallback<Schema$PlatformType>): void;
        get(params: Params$Resource$Platformtypes$Get, callback: BodyResponseCallback<Schema$PlatformType>): void;
        get(callback: BodyResponseCallback<Schema$PlatformType>): void;
        /**
         * Retrieves a list of platform types.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Platformtypes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Platformtypes$List, options?: MethodOptions): GaxiosPromise<Schema$PlatformTypesListResponse>;
        list(params: Params$Resource$Platformtypes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Platformtypes$List, options: MethodOptions | BodyResponseCallback<Schema$PlatformTypesListResponse>, callback: BodyResponseCallback<Schema$PlatformTypesListResponse>): void;
        list(params: Params$Resource$Platformtypes$List, callback: BodyResponseCallback<Schema$PlatformTypesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlatformTypesListResponse>): void;
    }
    export interface Params$Resource$Platformtypes$Get extends StandardParameters {
        /**
         * Platform type ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Platformtypes$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Postalcodes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one postal code by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Postalcodes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Postalcodes$Get, options?: MethodOptions): GaxiosPromise<Schema$PostalCode>;
        get(params: Params$Resource$Postalcodes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Postalcodes$Get, options: MethodOptions | BodyResponseCallback<Schema$PostalCode>, callback: BodyResponseCallback<Schema$PostalCode>): void;
        get(params: Params$Resource$Postalcodes$Get, callback: BodyResponseCallback<Schema$PostalCode>): void;
        get(callback: BodyResponseCallback<Schema$PostalCode>): void;
        /**
         * Retrieves a list of postal codes.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Postalcodes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Postalcodes$List, options?: MethodOptions): GaxiosPromise<Schema$PostalCodesListResponse>;
        list(params: Params$Resource$Postalcodes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Postalcodes$List, options: MethodOptions | BodyResponseCallback<Schema$PostalCodesListResponse>, callback: BodyResponseCallback<Schema$PostalCodesListResponse>): void;
        list(params: Params$Resource$Postalcodes$List, callback: BodyResponseCallback<Schema$PostalCodesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PostalCodesListResponse>): void;
    }
    export interface Params$Resource$Postalcodes$Get extends StandardParameters {
        /**
         * Postal code ID.
         */
        code?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Postalcodes$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one project by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Get, options?: MethodOptions): GaxiosPromise<Schema$Project>;
        get(params: Params$Resource$Projects$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Get, options: MethodOptions | BodyResponseCallback<Schema$Project>, callback: BodyResponseCallback<Schema$Project>): void;
        get(params: Params$Resource$Projects$Get, callback: BodyResponseCallback<Schema$Project>): void;
        get(callback: BodyResponseCallback<Schema$Project>): void;
        /**
         * Retrieves a list of projects, possibly filtered. This method supports paging .
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$List, options?: MethodOptions): GaxiosPromise<Schema$ProjectsListResponse>;
        list(params: Params$Resource$Projects$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$List, options: MethodOptions | BodyResponseCallback<Schema$ProjectsListResponse>, callback: BodyResponseCallback<Schema$ProjectsListResponse>): void;
        list(params: Params$Resource$Projects$List, callback: BodyResponseCallback<Schema$ProjectsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$ProjectsListResponse>): void;
    }
    export interface Params$Resource$Projects$Get extends StandardParameters {
        /**
         * Project ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Projects$List extends StandardParameters {
        /**
         * Select only projects with these advertiser IDs.
         */
        advertiserIds?: string[];
        /**
         * Select only projects with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Regions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a list of regions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Regions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Regions$List, options?: MethodOptions): GaxiosPromise<Schema$RegionsListResponse>;
        list(params: Params$Resource$Regions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Regions$List, options: MethodOptions | BodyResponseCallback<Schema$RegionsListResponse>, callback: BodyResponseCallback<Schema$RegionsListResponse>): void;
        list(params: Params$Resource$Regions$List, callback: BodyResponseCallback<Schema$RegionsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$RegionsListResponse>): void;
    }
    export interface Params$Resource$Regions$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Remarketinglists {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one remarketing list by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Remarketinglists$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Remarketinglists$Get, options?: MethodOptions): GaxiosPromise<Schema$RemarketingList>;
        get(params: Params$Resource$Remarketinglists$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Remarketinglists$Get, options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        get(params: Params$Resource$Remarketinglists$Get, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        get(callback: BodyResponseCallback<Schema$RemarketingList>): void;
        /**
         * Inserts a new remarketing list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Remarketinglists$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Remarketinglists$Insert, options?: MethodOptions): GaxiosPromise<Schema$RemarketingList>;
        insert(params: Params$Resource$Remarketinglists$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Remarketinglists$Insert, options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        insert(params: Params$Resource$Remarketinglists$Insert, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        insert(callback: BodyResponseCallback<Schema$RemarketingList>): void;
        /**
         * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Remarketinglists$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Remarketinglists$List, options?: MethodOptions): GaxiosPromise<Schema$RemarketingListsListResponse>;
        list(params: Params$Resource$Remarketinglists$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Remarketinglists$List, options: MethodOptions | BodyResponseCallback<Schema$RemarketingListsListResponse>, callback: BodyResponseCallback<Schema$RemarketingListsListResponse>): void;
        list(params: Params$Resource$Remarketinglists$List, callback: BodyResponseCallback<Schema$RemarketingListsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$RemarketingListsListResponse>): void;
        /**
         * Updates an existing RemarketingList. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Remarketinglists$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Remarketinglists$Patch, options?: MethodOptions): GaxiosPromise<Schema$RemarketingList>;
        patch(params: Params$Resource$Remarketinglists$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Remarketinglists$Patch, options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        patch(params: Params$Resource$Remarketinglists$Patch, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        patch(callback: BodyResponseCallback<Schema$RemarketingList>): void;
        /**
         * Updates an existing remarketing list.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Remarketinglists$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Remarketinglists$Update, options?: MethodOptions): GaxiosPromise<Schema$RemarketingList>;
        update(params: Params$Resource$Remarketinglists$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Remarketinglists$Update, options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        update(params: Params$Resource$Remarketinglists$Update, callback: BodyResponseCallback<Schema$RemarketingList>): void;
        update(callback: BodyResponseCallback<Schema$RemarketingList>): void;
    }
    export interface Params$Resource$Remarketinglists$Get extends StandardParameters {
        /**
         * Remarketing list ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Remarketinglists$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemarketingList;
    }
    export interface Params$Resource$Remarketinglists$List extends StandardParameters {
        /**
         * Select only active or only inactive remarketing lists.
         */
        active?: boolean;
        /**
         * Required. Select only remarketing lists owned by this advertiser.
         */
        advertiserId?: string;
        /**
         * Select only remarketing lists that have this floodlight activity ID.
         */
        floodlightActivityId?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
         */
        name?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Remarketinglists$Patch extends StandardParameters {
        /**
         * Required. RemarketingList ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemarketingList;
    }
    export interface Params$Resource$Remarketinglists$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemarketingList;
    }
    export class Resource$Remarketinglistshares {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one remarketing list share by remarketing list ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Remarketinglistshares$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Remarketinglistshares$Get, options?: MethodOptions): GaxiosPromise<Schema$RemarketingListShare>;
        get(params: Params$Resource$Remarketinglistshares$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Remarketinglistshares$Get, options: MethodOptions | BodyResponseCallback<Schema$RemarketingListShare>, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        get(params: Params$Resource$Remarketinglistshares$Get, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        get(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        /**
         * Updates an existing RemarketingListShare. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Remarketinglistshares$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Remarketinglistshares$Patch, options?: MethodOptions): GaxiosPromise<Schema$RemarketingListShare>;
        patch(params: Params$Resource$Remarketinglistshares$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Remarketinglistshares$Patch, options: MethodOptions | BodyResponseCallback<Schema$RemarketingListShare>, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        patch(params: Params$Resource$Remarketinglistshares$Patch, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        patch(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        /**
         * Updates an existing remarketing list share.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Remarketinglistshares$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Remarketinglistshares$Update, options?: MethodOptions): GaxiosPromise<Schema$RemarketingListShare>;
        update(params: Params$Resource$Remarketinglistshares$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Remarketinglistshares$Update, options: MethodOptions | BodyResponseCallback<Schema$RemarketingListShare>, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        update(params: Params$Resource$Remarketinglistshares$Update, callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
        update(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
    }
    export interface Params$Resource$Remarketinglistshares$Get extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Remarketing list ID.
         */
        remarketingListId?: string;
    }
    export interface Params$Resource$Remarketinglistshares$Patch extends StandardParameters {
        /**
         * Required. RemarketingList ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemarketingListShare;
    }
    export interface Params$Resource$Remarketinglistshares$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemarketingListShare;
    }
    export class Resource$Reports {
        context: APIRequestContext;
        compatibleFields: Resource$Reports$Compatiblefields;
        files: Resource$Reports$Files;
        constructor(context: APIRequestContext);
        /**
         * Deletes a report by its ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Reports$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Reports$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Reports$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Reports$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Reports$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Retrieves a report by its ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Reports$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Reports$Get, options?: MethodOptions): GaxiosPromise<Schema$Report>;
        get(params: Params$Resource$Reports$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Reports$Get, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        get(params: Params$Resource$Reports$Get, callback: BodyResponseCallback<Schema$Report>): void;
        get(callback: BodyResponseCallback<Schema$Report>): void;
        /**
         * Creates a report.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Reports$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Reports$Insert, options?: MethodOptions): GaxiosPromise<Schema$Report>;
        insert(params: Params$Resource$Reports$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Reports$Insert, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        insert(params: Params$Resource$Reports$Insert, callback: BodyResponseCallback<Schema$Report>): void;
        insert(callback: BodyResponseCallback<Schema$Report>): void;
        /**
         * Retrieves list of reports.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Reports$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Reports$List, options?: MethodOptions): GaxiosPromise<Schema$ReportList>;
        list(params: Params$Resource$Reports$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Reports$List, options: MethodOptions | BodyResponseCallback<Schema$ReportList>, callback: BodyResponseCallback<Schema$ReportList>): void;
        list(params: Params$Resource$Reports$List, callback: BodyResponseCallback<Schema$ReportList>): void;
        list(callback: BodyResponseCallback<Schema$ReportList>): void;
        /**
         * Updates an existing report. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Reports$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Reports$Patch, options?: MethodOptions): GaxiosPromise<Schema$Report>;
        patch(params: Params$Resource$Reports$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Reports$Patch, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        patch(params: Params$Resource$Reports$Patch, callback: BodyResponseCallback<Schema$Report>): void;
        patch(callback: BodyResponseCallback<Schema$Report>): void;
        /**
         * Runs a report.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        run(params: Params$Resource$Reports$Run, options: StreamMethodOptions): GaxiosPromise<Readable>;
        run(params?: Params$Resource$Reports$Run, options?: MethodOptions): GaxiosPromise<Schema$File>;
        run(params: Params$Resource$Reports$Run, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        run(params: Params$Resource$Reports$Run, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        run(params: Params$Resource$Reports$Run, callback: BodyResponseCallback<Schema$File>): void;
        run(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * Updates a report.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Reports$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Reports$Update, options?: MethodOptions): GaxiosPromise<Schema$Report>;
        update(params: Params$Resource$Reports$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Reports$Update, options: MethodOptions | BodyResponseCallback<Schema$Report>, callback: BodyResponseCallback<Schema$Report>): void;
        update(params: Params$Resource$Reports$Update, callback: BodyResponseCallback<Schema$Report>): void;
        update(callback: BodyResponseCallback<Schema$Report>): void;
    }
    export interface Params$Resource$Reports$Delete extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
    }
    export interface Params$Resource$Reports$Get extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
    }
    export interface Params$Resource$Reports$Insert extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Report;
    }
    export interface Params$Resource$Reports$List extends StandardParameters {
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * The value of the nextToken from the previous result page.
         */
        pageToken?: string;
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The scope that defines which results are returned.
         */
        scope?: string;
        /**
         * The field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Reports$Patch extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Report;
    }
    export interface Params$Resource$Reports$Run extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
        /**
         * If set and true, tries to run the report synchronously.
         */
        synchronous?: boolean;
    }
    export interface Params$Resource$Reports$Update extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Report;
    }
    export class Resource$Reports$Compatiblefields {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        query(params: Params$Resource$Reports$Compatiblefields$Query, options: StreamMethodOptions): GaxiosPromise<Readable>;
        query(params?: Params$Resource$Reports$Compatiblefields$Query, options?: MethodOptions): GaxiosPromise<Schema$CompatibleFields>;
        query(params: Params$Resource$Reports$Compatiblefields$Query, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        query(params: Params$Resource$Reports$Compatiblefields$Query, options: MethodOptions | BodyResponseCallback<Schema$CompatibleFields>, callback: BodyResponseCallback<Schema$CompatibleFields>): void;
        query(params: Params$Resource$Reports$Compatiblefields$Query, callback: BodyResponseCallback<Schema$CompatibleFields>): void;
        query(callback: BodyResponseCallback<Schema$CompatibleFields>): void;
    }
    export interface Params$Resource$Reports$Compatiblefields$Query extends StandardParameters {
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Report;
    }
    export class Resource$Reports$Files {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves a report file by its report ID and file ID. This method supports media download.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Reports$Files$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Reports$Files$Get, options?: MethodOptions): GaxiosPromise<Schema$File>;
        get(params: Params$Resource$Reports$Files$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Reports$Files$Get, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        get(params: Params$Resource$Reports$Files$Get, callback: BodyResponseCallback<Schema$File>): void;
        get(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * Lists files for a report.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Reports$Files$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Reports$Files$List, options?: MethodOptions): GaxiosPromise<Schema$FileList>;
        list(params: Params$Resource$Reports$Files$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Reports$Files$List, options: MethodOptions | BodyResponseCallback<Schema$FileList>, callback: BodyResponseCallback<Schema$FileList>): void;
        list(params: Params$Resource$Reports$Files$List, callback: BodyResponseCallback<Schema$FileList>): void;
        list(callback: BodyResponseCallback<Schema$FileList>): void;
    }
    export interface Params$Resource$Reports$Files$Get extends StandardParameters {
        /**
         * The ID of the report file.
         */
        fileId?: string;
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the report.
         */
        reportId?: string;
    }
    export interface Params$Resource$Reports$Files$List extends StandardParameters {
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * The value of the nextToken from the previous result page.
         */
        pageToken?: string;
        /**
         * The Campaign Manager 360 user profile ID.
         */
        profileId?: string;
        /**
         * The ID of the parent report.
         */
        reportId?: string;
        /**
         * The field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Sites {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one site by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Sites$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Sites$Get, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        get(params: Params$Resource$Sites$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Sites$Get, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        get(params: Params$Resource$Sites$Get, callback: BodyResponseCallback<Schema$Site>): void;
        get(callback: BodyResponseCallback<Schema$Site>): void;
        /**
         * Inserts a new site.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Sites$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Sites$Insert, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        insert(params: Params$Resource$Sites$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Sites$Insert, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        insert(params: Params$Resource$Sites$Insert, callback: BodyResponseCallback<Schema$Site>): void;
        insert(callback: BodyResponseCallback<Schema$Site>): void;
        /**
         * Retrieves a list of sites, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Sites$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Sites$List, options?: MethodOptions): GaxiosPromise<Schema$SitesListResponse>;
        list(params: Params$Resource$Sites$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Sites$List, options: MethodOptions | BodyResponseCallback<Schema$SitesListResponse>, callback: BodyResponseCallback<Schema$SitesListResponse>): void;
        list(params: Params$Resource$Sites$List, callback: BodyResponseCallback<Schema$SitesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SitesListResponse>): void;
        /**
         * Updates an existing site. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Sites$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Sites$Patch, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        patch(params: Params$Resource$Sites$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Sites$Patch, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        patch(params: Params$Resource$Sites$Patch, callback: BodyResponseCallback<Schema$Site>): void;
        patch(callback: BodyResponseCallback<Schema$Site>): void;
        /**
         * Updates an existing site.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Sites$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Sites$Update, options?: MethodOptions): GaxiosPromise<Schema$Site>;
        update(params: Params$Resource$Sites$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Sites$Update, options: MethodOptions | BodyResponseCallback<Schema$Site>, callback: BodyResponseCallback<Schema$Site>): void;
        update(params: Params$Resource$Sites$Update, callback: BodyResponseCallback<Schema$Site>): void;
        update(callback: BodyResponseCallback<Schema$Site>): void;
    }
    export interface Params$Resource$Sites$Get extends StandardParameters {
        /**
         * Site ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Sites$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Site;
    }
    export interface Params$Resource$Sites$List extends StandardParameters {
        /**
         * This search filter is no longer supported and will have no effect on the results returned.
         */
        acceptsInStreamVideoPlacements?: boolean;
        /**
         * This search filter is no longer supported and will have no effect on the results returned.
         */
        acceptsInterstitialPlacements?: boolean;
        /**
         * Select only sites that accept publisher paid placements.
         */
        acceptsPublisherPaidPlacements?: boolean;
        /**
         * Select only AdWords sites.
         */
        adWordsSite?: boolean;
        /**
         * Select only approved sites.
         */
        approved?: boolean;
        /**
         * Select only sites with these campaign IDs.
         */
        campaignIds?: string[];
        /**
         * Select only sites with these directory site IDs.
         */
        directorySiteIds?: string[];
        /**
         * Select only sites with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only sites with this subaccount ID.
         */
        subaccountId?: string;
        /**
         * Select only sites that have not been mapped to a directory site.
         */
        unmappedSite?: boolean;
    }
    export interface Params$Resource$Sites$Patch extends StandardParameters {
        /**
         * Required. Site ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Site;
    }
    export interface Params$Resource$Sites$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Site;
    }
    export class Resource$Sizes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one size by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Sizes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Sizes$Get, options?: MethodOptions): GaxiosPromise<Schema$Size>;
        get(params: Params$Resource$Sizes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Sizes$Get, options: MethodOptions | BodyResponseCallback<Schema$Size>, callback: BodyResponseCallback<Schema$Size>): void;
        get(params: Params$Resource$Sizes$Get, callback: BodyResponseCallback<Schema$Size>): void;
        get(callback: BodyResponseCallback<Schema$Size>): void;
        /**
         * Inserts a new size.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Sizes$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Sizes$Insert, options?: MethodOptions): GaxiosPromise<Schema$Size>;
        insert(params: Params$Resource$Sizes$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Sizes$Insert, options: MethodOptions | BodyResponseCallback<Schema$Size>, callback: BodyResponseCallback<Schema$Size>): void;
        insert(params: Params$Resource$Sizes$Insert, callback: BodyResponseCallback<Schema$Size>): void;
        insert(callback: BodyResponseCallback<Schema$Size>): void;
        /**
         * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Sizes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Sizes$List, options?: MethodOptions): GaxiosPromise<Schema$SizesListResponse>;
        list(params: Params$Resource$Sizes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Sizes$List, options: MethodOptions | BodyResponseCallback<Schema$SizesListResponse>, callback: BodyResponseCallback<Schema$SizesListResponse>): void;
        list(params: Params$Resource$Sizes$List, callback: BodyResponseCallback<Schema$SizesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SizesListResponse>): void;
    }
    export interface Params$Resource$Sizes$Get extends StandardParameters {
        /**
         * Size ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Sizes$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Size;
    }
    export interface Params$Resource$Sizes$List extends StandardParameters {
        /**
         * Select only sizes with this height.
         */
        height?: number;
        /**
         * Select only IAB standard sizes.
         */
        iabStandard?: boolean;
        /**
         * Select only sizes with these IDs.
         */
        ids?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Select only sizes with this width.
         */
        width?: number;
    }
    export class Resource$Subaccounts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one subaccount by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Subaccounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Subaccounts$Get, options?: MethodOptions): GaxiosPromise<Schema$Subaccount>;
        get(params: Params$Resource$Subaccounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Subaccounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Subaccount>, callback: BodyResponseCallback<Schema$Subaccount>): void;
        get(params: Params$Resource$Subaccounts$Get, callback: BodyResponseCallback<Schema$Subaccount>): void;
        get(callback: BodyResponseCallback<Schema$Subaccount>): void;
        /**
         * Inserts a new subaccount.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Subaccounts$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Subaccounts$Insert, options?: MethodOptions): GaxiosPromise<Schema$Subaccount>;
        insert(params: Params$Resource$Subaccounts$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Subaccounts$Insert, options: MethodOptions | BodyResponseCallback<Schema$Subaccount>, callback: BodyResponseCallback<Schema$Subaccount>): void;
        insert(params: Params$Resource$Subaccounts$Insert, callback: BodyResponseCallback<Schema$Subaccount>): void;
        insert(callback: BodyResponseCallback<Schema$Subaccount>): void;
        /**
         * Gets a list of subaccounts, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Subaccounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Subaccounts$List, options?: MethodOptions): GaxiosPromise<Schema$SubaccountsListResponse>;
        list(params: Params$Resource$Subaccounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Subaccounts$List, options: MethodOptions | BodyResponseCallback<Schema$SubaccountsListResponse>, callback: BodyResponseCallback<Schema$SubaccountsListResponse>): void;
        list(params: Params$Resource$Subaccounts$List, callback: BodyResponseCallback<Schema$SubaccountsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SubaccountsListResponse>): void;
        /**
         * Updates an existing subaccount. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Subaccounts$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Subaccounts$Patch, options?: MethodOptions): GaxiosPromise<Schema$Subaccount>;
        patch(params: Params$Resource$Subaccounts$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Subaccounts$Patch, options: MethodOptions | BodyResponseCallback<Schema$Subaccount>, callback: BodyResponseCallback<Schema$Subaccount>): void;
        patch(params: Params$Resource$Subaccounts$Patch, callback: BodyResponseCallback<Schema$Subaccount>): void;
        patch(callback: BodyResponseCallback<Schema$Subaccount>): void;
        /**
         * Updates an existing subaccount.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Subaccounts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Subaccounts$Update, options?: MethodOptions): GaxiosPromise<Schema$Subaccount>;
        update(params: Params$Resource$Subaccounts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Subaccounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Subaccount>, callback: BodyResponseCallback<Schema$Subaccount>): void;
        update(params: Params$Resource$Subaccounts$Update, callback: BodyResponseCallback<Schema$Subaccount>): void;
        update(callback: BodyResponseCallback<Schema$Subaccount>): void;
    }
    export interface Params$Resource$Subaccounts$Get extends StandardParameters {
        /**
         * Subaccount ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Subaccounts$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subaccount;
    }
    export interface Params$Resource$Subaccounts$List extends StandardParameters {
        /**
         * Select only subaccounts with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Subaccounts$Patch extends StandardParameters {
        /**
         * Required. Subaccount ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subaccount;
    }
    export interface Params$Resource$Subaccounts$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subaccount;
    }
    export class Resource$Targetableremarketinglists {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one remarketing list by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Targetableremarketinglists$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Targetableremarketinglists$Get, options?: MethodOptions): GaxiosPromise<Schema$TargetableRemarketingList>;
        get(params: Params$Resource$Targetableremarketinglists$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Targetableremarketinglists$Get, options: MethodOptions | BodyResponseCallback<Schema$TargetableRemarketingList>, callback: BodyResponseCallback<Schema$TargetableRemarketingList>): void;
        get(params: Params$Resource$Targetableremarketinglists$Get, callback: BodyResponseCallback<Schema$TargetableRemarketingList>): void;
        get(callback: BodyResponseCallback<Schema$TargetableRemarketingList>): void;
        /**
         * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Targetableremarketinglists$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Targetableremarketinglists$List, options?: MethodOptions): GaxiosPromise<Schema$TargetableRemarketingListsListResponse>;
        list(params: Params$Resource$Targetableremarketinglists$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Targetableremarketinglists$List, options: MethodOptions | BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>, callback: BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>): void;
        list(params: Params$Resource$Targetableremarketinglists$List, callback: BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>): void;
    }
    export interface Params$Resource$Targetableremarketinglists$Get extends StandardParameters {
        /**
         * Remarketing list ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Targetableremarketinglists$List extends StandardParameters {
        /**
         * Select only active or only inactive targetable remarketing lists.
         */
        active?: boolean;
        /**
         * Required. Select only targetable remarketing lists targetable by these advertisers.
         */
        advertiserId?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
         */
        name?: string;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export class Resource$Targetingtemplates {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one targeting template by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Targetingtemplates$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Targetingtemplates$Get, options?: MethodOptions): GaxiosPromise<Schema$TargetingTemplate>;
        get(params: Params$Resource$Targetingtemplates$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Targetingtemplates$Get, options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        get(params: Params$Resource$Targetingtemplates$Get, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        get(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        /**
         * Inserts a new targeting template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Targetingtemplates$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Targetingtemplates$Insert, options?: MethodOptions): GaxiosPromise<Schema$TargetingTemplate>;
        insert(params: Params$Resource$Targetingtemplates$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Targetingtemplates$Insert, options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        insert(params: Params$Resource$Targetingtemplates$Insert, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        insert(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        /**
         * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Targetingtemplates$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Targetingtemplates$List, options?: MethodOptions): GaxiosPromise<Schema$TargetingTemplatesListResponse>;
        list(params: Params$Resource$Targetingtemplates$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Targetingtemplates$List, options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplatesListResponse>, callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>): void;
        list(params: Params$Resource$Targetingtemplates$List, callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>): void;
        /**
         * Updates an existing targeting template. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Targetingtemplates$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Targetingtemplates$Patch, options?: MethodOptions): GaxiosPromise<Schema$TargetingTemplate>;
        patch(params: Params$Resource$Targetingtemplates$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Targetingtemplates$Patch, options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        patch(params: Params$Resource$Targetingtemplates$Patch, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        patch(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        /**
         * Updates an existing targeting template.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Targetingtemplates$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Targetingtemplates$Update, options?: MethodOptions): GaxiosPromise<Schema$TargetingTemplate>;
        update(params: Params$Resource$Targetingtemplates$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Targetingtemplates$Update, options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        update(params: Params$Resource$Targetingtemplates$Update, callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
        update(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
    }
    export interface Params$Resource$Targetingtemplates$Get extends StandardParameters {
        /**
         * Targeting template ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Targetingtemplates$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TargetingTemplate;
    }
    export interface Params$Resource$Targetingtemplates$List extends StandardParameters {
        /**
         * Select only targeting templates with this advertiser ID.
         */
        advertiserId?: string;
        /**
         * Select only targeting templates with these IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
    }
    export interface Params$Resource$Targetingtemplates$Patch extends StandardParameters {
        /**
         * Required. RemarketingList ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TargetingTemplate;
    }
    export interface Params$Resource$Targetingtemplates$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TargetingTemplate;
    }
    export class Resource$Userprofiles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one user profile by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Userprofiles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userprofiles$Get, options?: MethodOptions): GaxiosPromise<Schema$UserProfile>;
        get(params: Params$Resource$Userprofiles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userprofiles$Get, options: MethodOptions | BodyResponseCallback<Schema$UserProfile>, callback: BodyResponseCallback<Schema$UserProfile>): void;
        get(params: Params$Resource$Userprofiles$Get, callback: BodyResponseCallback<Schema$UserProfile>): void;
        get(callback: BodyResponseCallback<Schema$UserProfile>): void;
        /**
         * Retrieves list of user profiles for a user.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Userprofiles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Userprofiles$List, options?: MethodOptions): GaxiosPromise<Schema$UserProfileList>;
        list(params: Params$Resource$Userprofiles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Userprofiles$List, options: MethodOptions | BodyResponseCallback<Schema$UserProfileList>, callback: BodyResponseCallback<Schema$UserProfileList>): void;
        list(params: Params$Resource$Userprofiles$List, callback: BodyResponseCallback<Schema$UserProfileList>): void;
        list(callback: BodyResponseCallback<Schema$UserProfileList>): void;
    }
    export interface Params$Resource$Userprofiles$Get extends StandardParameters {
        /**
         * The user profile ID.
         */
        profileId?: string;
    }
    export interface Params$Resource$Userprofiles$List extends StandardParameters {
    }
    export class Resource$Userrolepermissiongroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one user role permission group by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Userrolepermissiongroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userrolepermissiongroups$Get, options?: MethodOptions): GaxiosPromise<Schema$UserRolePermissionGroup>;
        get(params: Params$Resource$Userrolepermissiongroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userrolepermissiongroups$Get, options: MethodOptions | BodyResponseCallback<Schema$UserRolePermissionGroup>, callback: BodyResponseCallback<Schema$UserRolePermissionGroup>): void;
        get(params: Params$Resource$Userrolepermissiongroups$Get, callback: BodyResponseCallback<Schema$UserRolePermissionGroup>): void;
        get(callback: BodyResponseCallback<Schema$UserRolePermissionGroup>): void;
        /**
         * Gets a list of all supported user role permission groups.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Userrolepermissiongroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Userrolepermissiongroups$List, options?: MethodOptions): GaxiosPromise<Schema$UserRolePermissionGroupsListResponse>;
        list(params: Params$Resource$Userrolepermissiongroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Userrolepermissiongroups$List, options: MethodOptions | BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>, callback: BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>): void;
        list(params: Params$Resource$Userrolepermissiongroups$List, callback: BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>): void;
    }
    export interface Params$Resource$Userrolepermissiongroups$Get extends StandardParameters {
        /**
         * User role permission group ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Userrolepermissiongroups$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Userrolepermissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one user role permission by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Userrolepermissions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userrolepermissions$Get, options?: MethodOptions): GaxiosPromise<Schema$UserRolePermission>;
        get(params: Params$Resource$Userrolepermissions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userrolepermissions$Get, options: MethodOptions | BodyResponseCallback<Schema$UserRolePermission>, callback: BodyResponseCallback<Schema$UserRolePermission>): void;
        get(params: Params$Resource$Userrolepermissions$Get, callback: BodyResponseCallback<Schema$UserRolePermission>): void;
        get(callback: BodyResponseCallback<Schema$UserRolePermission>): void;
        /**
         * Gets a list of user role permissions, possibly filtered.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Userrolepermissions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Userrolepermissions$List, options?: MethodOptions): GaxiosPromise<Schema$UserRolePermissionsListResponse>;
        list(params: Params$Resource$Userrolepermissions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Userrolepermissions$List, options: MethodOptions | BodyResponseCallback<Schema$UserRolePermissionsListResponse>, callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>): void;
        list(params: Params$Resource$Userrolepermissions$List, callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>): void;
    }
    export interface Params$Resource$Userrolepermissions$Get extends StandardParameters {
        /**
         * User role permission ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Userrolepermissions$List extends StandardParameters {
        /**
         * Select only user role permissions with these IDs.
         */
        ids?: string[];
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export class Resource$Userroles {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes an existing user role.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Userroles$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Userroles$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Userroles$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Userroles$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Userroles$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets one user role by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Userroles$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Userroles$Get, options?: MethodOptions): GaxiosPromise<Schema$UserRole>;
        get(params: Params$Resource$Userroles$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Userroles$Get, options: MethodOptions | BodyResponseCallback<Schema$UserRole>, callback: BodyResponseCallback<Schema$UserRole>): void;
        get(params: Params$Resource$Userroles$Get, callback: BodyResponseCallback<Schema$UserRole>): void;
        get(callback: BodyResponseCallback<Schema$UserRole>): void;
        /**
         * Inserts a new user role.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Userroles$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Userroles$Insert, options?: MethodOptions): GaxiosPromise<Schema$UserRole>;
        insert(params: Params$Resource$Userroles$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Userroles$Insert, options: MethodOptions | BodyResponseCallback<Schema$UserRole>, callback: BodyResponseCallback<Schema$UserRole>): void;
        insert(params: Params$Resource$Userroles$Insert, callback: BodyResponseCallback<Schema$UserRole>): void;
        insert(callback: BodyResponseCallback<Schema$UserRole>): void;
        /**
         * Retrieves a list of user roles, possibly filtered. This method supports paging.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Userroles$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Userroles$List, options?: MethodOptions): GaxiosPromise<Schema$UserRolesListResponse>;
        list(params: Params$Resource$Userroles$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Userroles$List, options: MethodOptions | BodyResponseCallback<Schema$UserRolesListResponse>, callback: BodyResponseCallback<Schema$UserRolesListResponse>): void;
        list(params: Params$Resource$Userroles$List, callback: BodyResponseCallback<Schema$UserRolesListResponse>): void;
        list(callback: BodyResponseCallback<Schema$UserRolesListResponse>): void;
        /**
         * Updates an existing user role. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Userroles$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Userroles$Patch, options?: MethodOptions): GaxiosPromise<Schema$UserRole>;
        patch(params: Params$Resource$Userroles$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Userroles$Patch, options: MethodOptions | BodyResponseCallback<Schema$UserRole>, callback: BodyResponseCallback<Schema$UserRole>): void;
        patch(params: Params$Resource$Userroles$Patch, callback: BodyResponseCallback<Schema$UserRole>): void;
        patch(callback: BodyResponseCallback<Schema$UserRole>): void;
        /**
         * Updates an existing user role.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Userroles$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Userroles$Update, options?: MethodOptions): GaxiosPromise<Schema$UserRole>;
        update(params: Params$Resource$Userroles$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Userroles$Update, options: MethodOptions | BodyResponseCallback<Schema$UserRole>, callback: BodyResponseCallback<Schema$UserRole>): void;
        update(params: Params$Resource$Userroles$Update, callback: BodyResponseCallback<Schema$UserRole>): void;
        update(callback: BodyResponseCallback<Schema$UserRole>): void;
    }
    export interface Params$Resource$Userroles$Delete extends StandardParameters {
        /**
         * User role ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Userroles$Get extends StandardParameters {
        /**
         * User role ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Userroles$Insert extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserRole;
    }
    export interface Params$Resource$Userroles$List extends StandardParameters {
        /**
         * Select only account level user roles not associated with any specific subaccount.
         */
        accountUserRoleOnly?: boolean;
        /**
         * Select only user roles with the specified IDs.
         */
        ids?: string[];
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Value of the nextPageToken from the previous result page.
         */
        pageToken?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
         */
        searchString?: string;
        /**
         * Field by which to sort the list.
         */
        sortField?: string;
        /**
         * Order of sorted results.
         */
        sortOrder?: string;
        /**
         * Select only user roles that belong to this subaccount.
         */
        subaccountId?: string;
    }
    export interface Params$Resource$Userroles$Patch extends StandardParameters {
        /**
         * Required. UserRole ID.
         */
        id?: string;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserRole;
    }
    export interface Params$Resource$Userroles$Update extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserRole;
    }
    export class Resource$Videoformats {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one video format by ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Videoformats$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Videoformats$Get, options?: MethodOptions): GaxiosPromise<Schema$VideoFormat>;
        get(params: Params$Resource$Videoformats$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Videoformats$Get, options: MethodOptions | BodyResponseCallback<Schema$VideoFormat>, callback: BodyResponseCallback<Schema$VideoFormat>): void;
        get(params: Params$Resource$Videoformats$Get, callback: BodyResponseCallback<Schema$VideoFormat>): void;
        get(callback: BodyResponseCallback<Schema$VideoFormat>): void;
        /**
         * Lists available video formats.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Videoformats$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Videoformats$List, options?: MethodOptions): GaxiosPromise<Schema$VideoFormatsListResponse>;
        list(params: Params$Resource$Videoformats$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Videoformats$List, options: MethodOptions | BodyResponseCallback<Schema$VideoFormatsListResponse>, callback: BodyResponseCallback<Schema$VideoFormatsListResponse>): void;
        list(params: Params$Resource$Videoformats$List, callback: BodyResponseCallback<Schema$VideoFormatsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$VideoFormatsListResponse>): void;
    }
    export interface Params$Resource$Videoformats$Get extends StandardParameters {
        /**
         * Video format ID.
         */
        id?: number;
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export interface Params$Resource$Videoformats$List extends StandardParameters {
        /**
         * User profile ID associated with this request.
         */
        profileId?: string;
    }
    export {};
}
