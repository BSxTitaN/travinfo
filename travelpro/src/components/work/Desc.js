import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Desc() {
  return (
    <HostingSection>
        <div className="para1">
            <h1 className="main">Introducing Travinfo</h1>
            <img src="images/ranb.png" className="imgi" />
            <p>We are a metasearch engine that quickly shifts through different data of hotels from different 
popular websites and compare its price from cheaper to expensive. We also provides 
features such as information about that place, maps and find a good hotels & 
restaurants. We compare and display different offers from many booking sites. We are not a party to any booking agreement between you and the site or accommodation you book with. We do not collect any payments for your stay and are not liable for the services offered by the booking site and the accommodation provider.
<br />
<br />
            Travinfo works with many booking sites worldwide, including online travel agencies, as well as accommodation chains and independent hotels. In total, Travinfo’s sites cover so many hotels and other types of accommodations across approximately 190 countries.</p>
        </div>
        <div className="para2">
            <h1 className="p1">Innovations you’ll only find on TravInfo</h1>
            <div className="card">
            <div className="cards">
                <h1 className="title">Newsroom</h1>
                <p className="des">Can read various types of Articles by verified Travellers & users</p>
                <img src="images/mk3.png" alt="" />
            </div>
            <div className="cards">
                <h1 className="title">I’m (even more) Flexible</h1>
                <p className="des">Search with various advance filters and discover even more types of unique stays & attractions.</p>
                <img src="images/mk4.png" alt="" />
            </div>
            <div className="cards">
                <h1 className="title">Allowing you to send Articles</h1>
                <p className="des">We believe, we each walk our paths so we can learn and share those lessons with others</p>
                <img src="images/mk5.png" alt="" />
            </div>
            </div>
        </div>
        <div className="para3">
        <h1 className="p2">A smarter, simpler & Viable System</h1>
            <div className="cd">
            <div className="cds">
                <h1 className="title">Feedback & Reviews</h1>
                <p className="des">Regular updates are provided for better performance according to the feedbacks 
given by users</p>
                <img src="images/mk1.png" alt="" />
            </div>
            <div className="cds">
                <h1 className="title">Design Your Profile</h1>
                <p className="des">Your profile is a place for other TravInfo members to learn about you and your travel style which is public and others can read it.</p>
                <img src="images/mk2.png" alt="" />
            </div>
            <div className="cdss">
                <h1 className="title">Improved search filters</h1>
                <p className="des">More prominent accessibility filters make it easy to find stays for a diversity of needs.</p>
            </div>
            <div className="cdss">
                <h1 className="title">Experiences map icons</h1>
                <p className="des">The map highlights Experiences tagged by type, such as food, outdoors and more.</p>
            </div>
            <div className="cdss">
                <h1 className="title">Things to do, just for you</h1>
                <p className="des">We suggest top Experiences for you based on who you're with and where you'll be.</p>
            </div>
            <div className="cdss">
                <h1 className="title">Improved search ranking</h1>
                <p className="des">Improved search ranking better showcases Users with great quality and value.</p>
            </div>
            <div className="cdss">
                <h1 className="title">Getting started, made simpler</h1>
                <p className="des">Welcome new guests in a single step using a simplified Explore Nearby Button</p>
            </div>
            <div className="cdss">
                <h1 className="title">User-Friendly UI</h1>
                <p className="des">We  provides simple and user-friendly environment to travellers with great Personalized Experience.</p>
            </div>
            </div>
        </div>
        <div className="para4">
            <h1 className="p3">Why is it possible that there may be a different price on the booking site than on TravInfo?</h1>
            <p>We are a metasearch engine that compares accommodation offers, not a booking site. When you click on an accommodation offer, we transfer you to the booking site that is offering you the deal you have chosen.

TravInfo works with many API endpoints, and the rates and availability they provide us with change constantly. TravInfo frequently updates its site to try to ensure that the information you see on our site is correct. On occasion though, you may not find the exact same offer you clicked on when you land on the booking site. This can be for a number of reasons. Perhaps the one of the API endpoints gave us inaccurate information, or maybe they have sold out of the rates they offered us – everyone loves a good deal!

In this case, we recommend clearing your cache and performing the search again.  If the discrepancy is still there, please <Link to="/feedback" className="lnk">Contact Us</Link> so we can deal with the issue ASAP. </p>

            <h1 className="p3">Difference between us and a booking Website</h1>
            <p>TravInfo is a metasearch engine that compares accommodation prices and offers provided to us by many different API endpoints, including online travel agencies (OTAs), accommodation chains and independent hotels. This means that while users decide on TravInfo which hotel best suits their needs, the booking process itself is completed through the booking sites, which are linked to our website.
<br /> <br />
Meanwhile, a booking site or Online Travel Agency (OTA) is a web-based marketplace that allows consumers to research and book travel products and services, including hotels, flights, cars, cruises, activities and more, directly with travel suppliers.
<br /> <br />
The hotel or booking site is mentioning a ‘Room Supplier’ - who or what is this?!
<br /> <br />
In order to facilitate customer booking requests, some booking sites will work with room suppliers. Room Suppliers are companies that purchase rooms from accommodation providers in bulk and, in turn, sell them on to booking sites, travel agents or tour operators. They sell directly to other businesses and do not have any direct dealings with consumers - this part is left to the booking sites!

It can sometimes happen that the reservation details will initially be recorded in the hotel’s booking management system under the supplier’s name and the guest’s personal details will not be released until closer to the arrival date. For any questions regarding the status of your reservation, it’s always best to contact the booking site you booked with directly.</p>
        </div>
    </HostingSection>
  );
}

const HostingSection = styled.section`
.para1 .main {
    font-family: "Product Sans";
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #111111;
}
.para1 p {
    font-family: "Product Sans";
      font-style: normal;
      font-size: 22px;
      line-height: 30px;
      color: #717171;
      padding-bottom: 4rem;
    margin-bottom: 0.5rem;
    border-bottom: 3px solid #222222 !important;
}
.para1 .imgi {
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 2rem;
}
.para2 {
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 3px solid #222222 !important;
}
.para2 .p1 {
    font-family: "Product Sans";
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #111111;
}
.para2 .card {
    display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
.card .cards {
    flex: 0 1 24%;
}
.para2 .cards .title{
    font-family: "Product Sans";
    font-size: 24px !important;
    line-height: 26px !important;
    margin-bottom: 18px;
    font-weight: 900px;
    color: #222222;
}
.para2 .cards .des{
    font-family: "Product Sans";
    font-size: 18px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 25vw;
    margin-bottom: 18px;
}
.para2 .cards img{
    width: 211px !important;
    height: 426px !important;
}
.para3 {
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 3px solid #222222 !important;
}
.para3 .p2 {
    font-family: "Product Sans";
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #111111;
}
.para3 .cd {
    display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
.cd .cds {
    flex: 0 1 44%;
}
.para3 .cds .title{
    font-family: "Product Sans";
    font-size: 24px !important;
    line-height: 26px !important;
    margin-bottom: 18px;
    font-weight: 900px;
    color: #222222;
}
.para3 .cds .des{
    font-family: "Product Sans";
    font-size: 18px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 25vw;
    margin-bottom: 18px;
}
.para3 .cds img{
    width: 520px !important;
    height: 626px !important;
    margin-bottom: 2rem;
}
.para3 .cdss {
    flex: 0 1 24%;
    border-bottom: 1px solid #DDDDDD !important;
    margin-bottom: 2rem;
}
.para3 .cdss .title{
    font-family: "Product Sans";
    font-size: 24px !important;
    line-height: 26px !important;
    margin-bottom: 18px;
    font-weight: 900px;
    color: #222222;
}
.para3 .cdss .des{
    font-family: "Product Sans";
    font-size: 18px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 25vw;
    margin-bottom: 2rem;
}
.para4{
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.para4 .p3 {
    font-family: "Product Sans";
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 3rem;
    color: #111111;
}
.para4 p {
    font-family: "Product Sans";
      font-style: normal;
      font-size: 22px;
      line-height: 30px;
      color: #717171;
      margin-bottom: 4rem;
}
.para4 .lnk {
    color: #00AEEF;
}
.para4 .lnk:hover {
    text-decoration: underline;
}
  @media (max-width: 36rem) {
    .para1 .main {
    font-size: 30px;
    }
    .para1 p {
      font-size: 16px;
      line-height: 18px;
      width: 90vw;
        border-bottom: 2px solid #222222 !important;
    }
    .para1 .imgi {
        width: 90vw;
        margin-bottom: 2rem;
        border-radius: 1rem;
    }
.para2 .p1 {
    font-size: 30px;
    margin-bottom: 3rem;
    width: 80vw;
}
.para2 .card {
    display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
.card .cards {
    flex: 0 1 100%;
}
.para2 .cards .title{
    font-size: 22px !important;
    line-height: 22px !important;
    margin-bottom: 16px;
}
.para2 .cards .des{
    font-size: 16px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 80vw;
    margin-bottom: 18px;
}
.para2 .cards img{
    margin-top: 3rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
    width: 211px !important;
    height: 426px !important;
}
.para3 {
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 2px solid #222222 !important;
}
.para3 .p2 {
    font-size: 30px;
    margin-bottom: 3rem;
    width: 80vw;
}
.para3 .cd {
    display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}
.cd .cds {
    flex: 0 1 100%;
}
.para3 .cds .title{
    font-size: 22px !important;
    line-height: 22px !important;
    margin-bottom: 16px;
}
.para3 .cds .des{
    font-size: 16px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 80vw;
    margin-bottom: 18px;
}
.para3 .cds img{
    height: 526px !important;
}
.para3 .cdss {
    flex: 0 1 100%;
    border-bottom: 1px solid #DDDDDD !important;
    margin-bottom: 2rem;
}
.para3 .cdss .title{
    font-size: 22px !important;
    line-height: 22px !important;
    margin-bottom: 16px;
}
.para3 .cdss .des{
    font-size: 16px;
    line-height: 24px;
    color: #717171;
    font-weight: 400;
    width: 80vw;
    margin-bottom: 18px;
}
.para4{
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.para4 .p3 {
    font-size: 30px;
    margin-bottom: 1rem;
    width: 80vw;
}
.para4 p {
    font-size: 16px;
      line-height: 18px;
      width: 90vw;
      margin-bottom: 1rem;
}
.para4 .lnk {
    color: #00AEEF;
}
.para4 .lnk:hover {
    text-decoration: underline;
}
  }
`;