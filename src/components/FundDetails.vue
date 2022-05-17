<template>
  <div class="col-md-12">
    <div class="col-md-6">
      <div class="fund-detail-page">
        <div class="detail-page">
          <div class="page">
            <div>
              <h4>Beneficiary Details</h4>
            </div>
            <hr />
            <div>
              <div><span><b>Name : </b>Venkateswarlu</span>&nbsp;&nbsp;&nbsp;<span><b>Age : </b>12</span></div>
              <div><p>S/O Srimannaraya</p></div>
              <div><p><b>Purpose : </b>Heart surgery</p></div>
              <div><p><b>Hospital Details : </b>Rainbow Hospitals, Hyderabad.</p></div>
              <div><p><b>Contact Details : </b>8297033922</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="fund-detail-page col-md-6">
        <div class="detail-page">
          <div class="page">
            <div>
              <h4>Donate via Paytm, Phonepe or Gpay</h4>
            </div>
            <hr />
            <div class="logo">
              <img src="@/assets/upi.jpg" class="upiLogoImg" />
            </div>
            <div>
              <h4><p>sreelekha@ybl</p></h4>
            </div>
            <div class="buttonmargin"><button type="button" class="button-details btn btn-outline-success">Copy</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundDetails",
};
</script>

<style scope>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

h3 {
  text-transform: none;
}
header .header {
  background-color: #fff;
  height: 45px;
}
header a img {
  width: 134px;
  margin-top: 4px;
}
.fund-detail-page {
  width: 400px;
  padding: 20% 0 0;
  margin: auto;
}
.fund-detail-page .detail-page .page {
  margin-top: -31px;
  margin-bottom: 26px;
}

.detail-page {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.upiLogoImg {
  width: 15%;
}
.buttonmargin {
  margin-top: 20px;
}
.button-details {
  background: green;
  color: white;
}
</style>