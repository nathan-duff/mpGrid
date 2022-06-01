import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../index.css';

let index = 0;

let nameStyle = {
    fontSize: '14px',
    margin: 0
};
let ridingStyle = {
    fontSize: '11px',
    margin: 0
};
let partyStyle = {
    fontSize: '12px',
    margin: 0,
    fontStyle: 'italic'
};
let pictureStyle = {
    display: 'inline',
    paddingBottom: 5
}

let pictureOn = true;
const pictureToggle = (event) => {
    pictureOn = event.target.checked;
    const mpNames = document.getElementsByClassName('nameStyle');
    const mpRiding = document.getElementsByClassName('ridingStyle');
    const mpParty = document.getElementsByClassName('partyStyle');
    const mpPicture = document.getElementsByClassName('pictureStyle');

    for (var i = 0; i < mpNames.length; i++) {
        if (pictureOn) {
            mpNames[i].style.fontSize = '14px';
            mpRiding[i].style.fontSize = '11px';
            mpParty[i].style.fontSize = '10px';
            mpPicture[i].style.display = 'inline';
        }
        else {
            mpNames[i].style.fontSize = '25px';
            mpRiding[i].style.fontSize = '20px';
            mpParty[i].style.fontSize = '15px';
            mpPicture[i].style.display = 'none';
        }
    }
};
const Mui = (data) => [
    <div>
         <FormControlLabel control={
        <Switch defaultChecked onChange={pictureToggle} />
         }
         label="Photos" />
        <Grid container  margin='auto' spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5, lg: 7, xl: 9 }}>
            {data.data.objects.map((mp) => (
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index++}>
                    <Box sx={{ maxWidth: 200, color: 'white', }}>
                        <Paper elevation={10} className="sheet" sx={{ bgcolor: "#413e3e", color: 'white', height: 225, paddingTop: 1.5 }}>
                            <Box sx={{
                                margin: 'auto',
                                width: '80%',
                                height: '100%',
                                textAlign: 'center',
                            }}>
                                <img
                                    className='pictureStyle'
                                    src={"http://api.openparliament.ca" + mp.image}
                                    alt=''
                                    height={150}
                                    style={pictureStyle}
                                />
                                <p className='nameStyle' style={nameStyle}>{mp.name}
                                </p>
                                <p className='ridingStyle' style={ridingStyle}>{mp.current_riding.name.en + ", " + mp.current_riding.province}
                                </p>
                                <p className='partyStyle' style={partyStyle}>
                                    {mp.current_party.short_name.en}
                                </p>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </div>
]

export default Mui;