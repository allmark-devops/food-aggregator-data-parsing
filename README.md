# food-aggregator-data-parsing
Swiggy &amp; Zomato data collection utility tool

=====================================
 From: IIoT-DG (IIOT-DG/192.168.1.21/IIoT-DG-<800b42a11cb622b2>)
  at Wed Mar 02 17:09:15 2022
-------------------------------------
https://www.zomato.com/webroutes/getPage?page_url=https://www.zomato.com/chennai/fresco-restaurant-1-anna-nagar-west/order


Zomato Details

Store Id : page_info.resId
Store Title : page_info.pageTitle
Store URL : page_info.pageUrl
Store Share URL : page_data.sections.SECTION_USER_ACTIONS.share.url
Store Res_Id : page_data.sections.SECTION_BASIC_INFO.res_id
Store Name : page_data.sections.SECTION_BASIC_INFO.name
Store Rating : page_data.sections.SECTION_BASIC_INFO.rating.aggregate_rating
Store Status : page_data.sections.SECTION_BASIC_INFO.res_status_text
Store Timing : page_data.sections.SECTION_BASIC_INFO.timing.timing_desc
Store FSSAI No : page_data.order.menuList.fssaiInfo.text


Store Address : page_data.sections.SECTION_RES_CONTACT.address
Store Location : page_data.sections.SECTION_RES_CONTACT.locality_verbose
Store City : page_data.sections.SECTION_RES_CONTACT.city_name
Store Country : page_data.sections.SECTION_RES_CONTACT.country_name
Store Zipcode : page_data.sections.SECTION_RES_CONTACT.zipcode

Store Latitude : page_data.sections.SECTION_RES_CONTACT.latitude
Store Longitude : page_data.sections.SECTION_RES_CONTACT.longitude

Store Phone : page_data.sections.SECTION_RES_CONTACT.phoneDetails.phoneStr
Store Currency : page_data.metaData.currencyDetails.currency
Store Currency ISO Code : page_data.metaData.currencyDetails.currencyISOCode




=====================================
 From: IIoT-DG (IIOT-DG/192.168.1.50/IIoT-DG-<800b42a11cb622b2>)
  at Mon Mar 28 02:12:39 2022
-------------------------------------
https://www.swiggy.com/dapi/menu/v4/full?menuId=43035




Store Id : data.id
Store Title : data.name
Store URL : -
Store Share URL : -
Store Res_Id : data.id
Store Name : data.name
Store Rating : data.avgRatingString
Store Status : -
Store Timing : -
Store FSSAI No : data.restaurantLicenses[0].text

Store Address : data.locality
Store Location : data.area
Store City : data.city
Store Country : -
Store Zipcode : -

Store Latitude : data.latLong
Store Longitude : data.latLong

Store Phone : -
Store Currency : -
Store Currency ISO Code : -




