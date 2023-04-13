const mongoose = require("mongoose")

//create schema
const Schema = mongoose.Schema
//Customer ID,Referred a Friend,Number of Referrals,Tenure in Months,Offer,Phone Service,Avg Monthly Long Distance Charges,Multiple Lines,Internet Service,Internet Type,Avg Monthly GB Download,Online Security,Online Backup,Device Protection Plan,Premium Tech Support,Streaming TV,Streaming Movies,Streaming Music,Unlimited Data,      Contract,Paperless Billing, Payment Method,Monthly Charge,Total Regular Charges,Total Refunds,Total Extra Data Charges,Total Long Distance Charges,Gender,Age,Under 30,Senior Citizen,Married,Dependents,Number of Dependents,       City,Zip Code,Latitude,  Longitude,Population,Churn Value,CLTV,Churn Category,                Churn Reason,Total Customer Svc Requests,Product/Service Issues Reported,Customer Satisfaction
// 8779-QRDMV,               No,                   0,              1, None,           No,                              0.0,            No,             Yes,  Fiber Optic,                      9,             No,           No,                   Yes,                  No,          No,             Yes,             No,            No,Month-to-Month,Yes              ,Bank Withdrawal,        41.236,                39.65,          0.0,                     0.0,                        0.0,  Male, 78,      No,           Yes,     No,        No,                   0,Los Angeles,   90022,34.02381,-118.156582,     68701,          1,5433,    Competitor,Competitor offered more data,                          5,                              0,

//create schema for data in dataset.csv
const dataSchema = new Schema({
    customer_id: String,
    referred_a_friend: String,
    number_of_referrals: Number,
    tenure_in_months: Number,
    offer: String,
    phone_service: String,
    avg_monthly_long_distance_charges: Number,
    multiple_lines: String,
    internet_service: String,
    internet_type: String,
    avg_monthly_gb_download: Number,
    online_security: String,
    online_backup: String,
    device_protection_plan: String,
    premium_tech_support: String,
    streaming_tv: String,
    streaming_movies: String,
    streaming_music: String,
    unlimited_data: String,
    contract: String,
    paperless_billing: String,
    payment_method: String,
    monthly_charge: Number,
    total_regular_charges: Number,
    total_refunds: Number,
    total_extra_data_charges: Number,
    total_long_distance_charges: Number,
    gender : String,
    age: Number,
    under_30: String,
    senior_citizen: String,
    married: String,
    dependents: String,
    number_of_dependents: Number,
    city: String,
    zip_code: Number,
    latitude: String,
    longitude: String,
    population: Number,
    churn_value: Number,
    cltv: Number,
    churn_category: String,
    churn_reason: String,
    total_customer_svc_requests: Number,
    product_service_issues_reported: Number,
    customer_satisfaction: Number
})



module.exports = mongoose.model("datas", dataSchema);


