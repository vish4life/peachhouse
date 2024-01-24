import northAmericaList from '../Data/NorthamericaList';
import asiaList from '../Data/AsiaList';
import europeList from '../Data/EuropeList';
import faqList,{emailList,phoneList,chatList} from '../Data/HelpList';

export const OverlayPop = (value) => {
    console.log("inside NA function: " + value.value);
    const locid = value.value;
    let loc_list = "";
    console.log("inside NA function: " + locid);
    if (locid === "NA") (loc_list = northAmericaList);
    if (locid === "AS") (loc_list = asiaList);
    if (locid === "EU") (loc_list = europeList);
    if (locid === "faq") (loc_list = faqList);
    if (locid === "phone") (loc_list = phoneList);
    if (locid === "email") (loc_list = emailList);
    if (locid === "chat") (loc_list = chatList);
    return (
        <>
            <div className='pop_container'>
                {loc_list.map((listing) => (
                    <div className='pop_content_box' key={listing.id}>
                        <div className='pop_head'>
                            {listing.heading}
                        </div><br/>
                        {listing.body.map((childlist) => (
                            <div className='pop_body' key={childlist.id}>
                                <div className='pop_body_head'>
                                    {childlist.title}
                                </div>
                                <div className='pop_body_data'>
                                    {childlist.content}<br/>
                                    {childlist.additionalInfo}
                                </div><br/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default OverlayPop;