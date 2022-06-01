import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import '../Homepage.css';

export default function Home() {
    return (
        <div>
            <Container id='homepageContent'>
                <Paper sx={{ bgcolor: "#413e3e", color: 'white', height: '100%', padding: 3 }}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Centre_Block_-_Parliament_Hill.jpg/1280px-Centre_Block_-_Parliament_Hill.jpg'
                        alt=''
                        width={'100%'}
                    />
                    <h1>Member of Parliament Info</h1>
                    <p>
                        This website compiles and lists the current members of parliament for the federal Government of Canada into two seperate grid systems. The data is shown using a reactive grid created using Material UI, and as an AG-grid<br /> <br />
                    </p>
                    <h2>Members of Parliament</h2>
                    <p>
                        A member of parliament (MP) is the representative in parliament of the people who elect them. MPs may represent an electoral district (constituency) or be selected from an electoral list. In many countries with bicameral parliaments, this term refers only to members of the lower house and upper house members. The terms congressman/congresswoman are equivalent terms used in other jurisdictions. The term parliamentarian is always used for members of Parliament, but this is always used to refer to elected government leaders such as senator in the United States. The term is also used to the characteristic of performing the duties of a member of a legislature, for example: "The two party leaders often disagreed on issues, but both were excellent parliamentarians and cooperated to get many good things done."<br /><br />
                        Members of parliament typically form parliamentary groups, often called caucuses, with members of the same political party.<br /><br />
                        The Parliament of Canada consists of the monarch, the Senate and the House of Commons. Only members of the House of Commons are referred to as Members of Parliament (French: député); members of the Senate are called Senators (French: sénateur). There are currently 105 seats in the Senate and 338 in the House of Commons. Members of Parliament are elected, while senators are appointed by the governor general on behalf of the sovereign at the direction of the prime minister. Retirement is mandatory for senators upon reaching the age of 75 years.<br /> <br />
                        Each province (and territory) has its own legislature, with each member usually known as a Member of the Legislative Assembly (MLA). In certain provinces, legislators carry other titles: Member of Provincial Parliament (MPP) in Ontario, Member of the National Assembly (MNA) in Quebec (French: député) and Member of the House of Assembly (MHA) in Newfoundland and Labrador. The provincial upper houses were eliminated through the 20th century.<br /> <br />
                    </p>
                </Paper>
            </Container>
        </div>
    )
}