require('./config')
const express = require('express');
const user = require('./schema')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.post('/search', async (req,resp) => {
    

    let filters = {
        "customer_id": "",
        "referred_a_friend": "",
        "number_of_referrals": -1,
        "tenure_in_months": -1,
        "offer": "",
        "phone_service": "",
        "avg_monthly_long_distance_charges": -1,
        "multiple_lines": "",
        "internet_service": "",
        "internet_type": "",
        "avg_monthly_gb_download": -1,
        "online_security": "",
        "online_backup": "",
        "device_protection_plan": "",
        "premium_tech_support": "",
        "streaming_tv": "",
        "streaming_movies": "",
        "streaming_music": "",
        "unlimited_data": "",
        "contract": "",
        "paperless_billing": "",
        "payment_method": "",
        "monthly_charge": -1,
        "total_regular_charges": -1,
        "total_refunds": -1,
        "total_extra_data_charges": -1,
        "total_long_distance_charges": -1,
        "gender": "",
        "age": -1,
        "under_30": "",
        "senior_citizen": "",
        "married": "",
        "dependents": "",
        "number_of_dependents": -1,
        "city": "",
        "zip_code": -1,
        "latitude": "",
        "longitude": "",
        "population": -1,
        "churn_value": 1,
        "cltv": -1,
        "churn_category": "",
        "churn_reason": "",
        "total_customer_svc_requests": -1,
        "product_service_issues_reported": -1,
        "customer_satisfaction": -1
    }

    
    console.log(req.body);

    for(key in req.body) {
        if(key in filters) {
            filters[key] = req.body[key];
        }
    }

    let data = await user.find()

    let new_data = [];

    if(filters.customer_id != "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].customer_id == filters.customer_id) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.referred_a_friend!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].referred_a_friend == filters.referred_a_friend) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }
    
    new_data = [];

    if(filters.number_of_referrals!= -1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].number_of_referrals == filters.number_of_referrals) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }
    
    new_data = [];

    if(filters.tenure_in_months != -1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].tenure_in_months == filters.tenure_in_months) {
                new_data.push(data[i])
            }
        }
        data = new_data;    
    }

    new_data = [];
    
    if(filters.offer != "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].offer == filters.offer) {
                new_data.push(data[i])
            }
        }
        data = new_data;    
    }

    new_data = [];

    if(filters.phone_service!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].phone_service == filters.phone_service) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.avg_monthly_long_distance_charges!= -1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].avg_monthly_long_distance_charges == filters.avg_monthly_long_distance_charges) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.multiple_lines!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].multiple_lines == filters.multiple_lines) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.internet_service!= "") { 
        for(var i=0; i<data.length; i++) {
            if(data[i].internet_service == filters.internet_service) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.internet_type!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].internet_type == filters.internet_type) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.avg_monthly_gb_download!= -1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].avg_monthly_gb_download == filters.avg_monthly_gb_download) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.online_security!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].online_security == filters.online_security) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.online_backup!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].online_backup == filters.online_backup) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.device_protection_plan!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].device_protection_plan == filters.device_protection_plan) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.premium_tech_support!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].premium_tech_support == filters.premium_tech_support) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.streaming_tv!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].streaming_tv == filters.streaming_tv) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];


    if(filters.streaming_movies!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].streaming_movies == filters.streaming_movies) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.streaming_music!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].streaming_music == filters.streaming_music) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.unlimited_data!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].unlimited_data == filters.unlimited_data) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.contract!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].contract == filters.contract) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.paperless_billing!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].paperless_billing == filters.paperless_billing) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }
    
    new_data = [];

    if(filters.payment_method!= "") {
        for(var i=0; i<data.length; i++) {
            if(data[i].payment_method == filters.payment_method) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.monthly_charge!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].monthly_charge == filters.monthly_charge) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.total_regular_charges!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].total_regular_charges == filters.total_regular_charges) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.total_refunds!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].total_refunds == filters.total_refunds) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.total_extra_data_charges!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].total_extra_data_charges == filters.total_extra_data_charges) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.total_long_distance_charges!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].total_long_distance_charges == filters.total_long_distance_charges) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.gender!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].gender == filters.gender) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.age!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].age == filters.age) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.under_30!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].under_30 == filters.under_30) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.senior_citizen!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].senior_citizen == filters.senior_citizen) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.married!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].married == filters.married) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.dependents!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].dependents == filters.dependents) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }
    
    new_data = [];

    if(filters.number_of_dependents!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].number_of_dependents == filters.number_of_dependents) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.city!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].city == filters.city) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.zip_code!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].zip_code == filters.zip_code) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }


    new_data = [];

    if(filters.latitude!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].latitude == filters.latitude) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.longitude!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].longitude == filters.longitude) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.population!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].population == filters.population) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.churn_value!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].churn_value == filters.churn_value) {
                new_data.push(data[i])
            }
        } 
        data = new_data;
    }
    
    new_data = [];

    if(filters.cltv!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].cltv == filters.cltv) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.churn_category!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].churn_category == filters.churn_category) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.churn_reason!="") {
        for(var i=0; i<data.length; i++) {
            if(data[i].churn_reason == filters.churn_reason) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.total_customer_svc_requests!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].total_customer_svc_requests == filters.total_customer_svc_requests) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.product_service_issues_reported!=-1) {
        for(var i=0; i<data.length; i++) {
            if(data[i].product_service_issues_reported == filters.product_service_issues_reported) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    new_data = [];

    if(filters.customer_satisfaction!=-1) { 
        for(var i=0; i<data.length; i++) {
            if(data[i].customer_satisfaction == filters.customer_satisfaction) {
                new_data.push(data[i])
            }
        }
        data = new_data;
    }

    resp.send(data);
    
})

app.listen(5000)
