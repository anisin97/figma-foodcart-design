import logo from './logo.svg';
import './App.css';
import { Container, Grid, Box } from '@mui/material';
import {useState} from 'react';
//import { vector } from "./public/vectorred.svg"
import foodimg from "./assets/Rectangle400.png";
import aboutimg from "./assets/pharmasict-serving-customer-drug-store 1.png";
import article1 from "./assets/grilled-tomatoes.png";
import article2 from "./assets/meal-prep-ideas.png";
import article3 from "./assets/meal-ideas.png";
import article4 from "./assets/img3.png";
import article5 from "./assets/img4.png";
import article6 from "./assets/img5.png";
import foodtruck from "./assets/Screenshot_669 2.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const prevPage = () => {
    setPageNumber(1);
  }
  const nextPage = () => {
    setPageNumber(2);
  }
  const articles = [
    [{img: article1, title: "Grilled Tomatoes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"},
    {img: article2, title: "Snacks for Travel", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"},
  {img: article3, title: "Post-workout Recipes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"}],
  [{img: article4, title: "How To Grill Corn", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"},
    {img: article5, title: "Crunchwrap Supreme", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"},
  {img: article6, title: "Broccoli Cheese Soup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the", date: "12/12/2021"}],
  ]
  return (
    <div className="App">
      <Grid container sx={{ width: 1920, height: 804, flexShrink: 0, backgroundColor: "#FFF" }}>
        <Grid item xs={6}>
          <img src={foodtruck} alt="foodtruck" style={{
            position: "absolute",
            left: 100,
            top: 33,
            width: 107,
            height: 83,
      
          }} />

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            width: "345px",
            top: "227px",
            left: "100px",
            position: "absolute",
            textAlign: "left",
          }}>
            <span style={{
              color: '#0E2368',
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: "69px",
              fontStyle: "normal",
              fontFamily: "Source Sans Pro",
            }}>Discover the <span style={{
              color: "red",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: "69px",
              fontStyle: "normal",
              fontFamily: "Source Sans Pro",
            }}>Best</span> Food and Drinks</span>
            <p style={{
              color: "#444957",
              fontSize: "16.445px",
              fontWeight: 400,
              lineHeight: "27.408px",
              fontStyle: "normal",
              fontFamily: "Open Sans",
              marginTop: "26px",
            }}>Naturally made Healthcare Products for the better care & support of your body.</p>
          </Box>
          <Box sx={{
            position: "absolute",
            display: "flex",
            width: "140px",
            height: "30px",
            padding: "14px 34px 14px 34px",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
            flexShrink: 0,
            borderRadius: "25px",
            backgroundColor: "#E23744",
            top: "556px",
            left: "97px"
          }}>
            <span styles={{
              color: "#FFF",
              fontSize: "18px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "36px",
              letterSpacing: "0.18px"
            }}>Explore Now!</span>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={foodimg} alt="food" style={{
            position: "absolute",
            top: 0,
            right: 0
          }} />
          <div style={{
            zIndex: 1,
            position: "absolute",
            top: 0,
            right: 0,
          }}>
            <svg width="752" height="839" viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
            </svg>
          </div>
        </Grid>

      </Grid>
      <Grid container sx={{ width: 1920, height: 804, flexShrink: 0, backgroundColor: "#FFF" }}>
        <Grid item xs={12} sx={{
          height: "467px",
          width: "100%",
          flexShrink: 0,
          marginTop: "186px",
          background: `linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)`
        }}>

          <img src={aboutimg} alt="about" width="384px" height="468px" style={{
            position: "absolute",
            left: "205px",
            flexShrink: 0,
          }} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            width: "345px",
            marginTop: "107px",
            left: "789px",
            position: "absolute",
            textAlign: "left",
          }}>
            <span style={{
              display: "flex",
              width: "422px",
              height: "26px",
              flexDirection: "column",
              color: "#0E2368",
              fontSize: "45px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "27px",
            }}> About Us</span>
            <span style={{
              display: "flex",
              height: "138px",
              flexDirection: "column",
              color: "#444957",
              fontSize: "15px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              marginTop: "26px"
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</span>
          </Box>

        </Grid>
      </Grid>
      <Grid container sx={{ width: "100%", height: "995px", flexShrink: 0, backgroundColor: "#FFF" }} spacing={2} >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          left: "108px",
          position: "absolute",
          textAlign: "left",
          height: "84px"
        }}><span style={{
          color: '#0E2368',
          fontSize: "56px",
          fontWeight: 600,
          lineHeight: "42px",
          fontStyle: "normal",
          fontFamily: "Source Sans Pro",
          letterSpacing: "2.24px",
        }}>Latest Articles</span>
        </Box>
        <Grid item xs={3} sx={{
          height: "564px", maxWidth: "381px", flexShrink: 0, marginTop: "81px",
          borderRadius: "20.937px",
          border: `1.37px solid rgba(147, 162, 211, 0.38)`,
          backgroundColor: "#FFF",
          marginLeft: "108px",
        }}>

          <img src={articles[pageNumber-1][0].img} alt="article1" style={{
            width: "326px",
            height: "257px",
            flexShrink: 0,
            borderRadius: "21px",
            background: `lightgray 50% / cover no-repeat`,
            marginLeft: "-27px",
            marginTop: "27px",
          }} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            width: "295px",
            height: "125px",
            marginTop: "35.5px",
            textAlign: "left",
            marginLeft: "50px",
          }}>
            <span style={{
              display: "flex",
              flexDirection: "column",
              color: "#0E2368",
              fontSize: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "27px",
            }}>{articles[pageNumber-1][2].title}</span>
            <span style={{
              display: "flex",
              height: "295px",
              flexDirection: "column",
              color: "#444957",
              fontSize: "15px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
              marginTop: "26px",
              letterSpacing: "-0.3px",
            }}>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
            </span>
          </Box>
          <Box sx={{
            position: "relative",
            display: "flex",
            width: "101px",
            height: "32px",
            padding: "3px 26px 3px 26px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "21px",
            border: `1px solid #424961`,
            marginTop: "27.41px",
            marginLeft: "43.17px"
          }}>
            <span styles={{
              color: "#424961",
              fontSize: "16.445px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "35.593px",
              letterSpacing: "0.493px"
            }}>Read More</span>
          </Box>

        </Grid>

        <Grid item xs={3} sx={{
          height: "564px", maxWidth: "381px", flexShrink: 0, marginTop: "81px",
          borderRadius: "20.937px",
          border: `1.37px solid rgba(147, 162, 211, 0.38)`,
          backgroundColor: "#FFF",
          marginLeft: "108px",
        }}>

          <img src={articles[pageNumber-1][1].img} alt="article1" style={{
            width: "326px",
            height: "257px",
            flexShrink: 0,
            borderRadius: "21px",
            background: `lightgray 50% / cover no-repeat`,
            marginLeft: "-27px",
            marginTop: "27px",
          }} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            width: "295px",
            height: "125px",
            marginTop: "35.5px",
            textAlign: "left",
            marginLeft: "50px",
          }}>
            <span style={{
              display: "flex",
              flexDirection: "column",
              color: "#0E2368",
              fontSize: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "27px",
            }}>{articles[pageNumber-1][2].title}</span>
            <span style={{
              display: "flex",
              height: "295px",
              flexDirection: "column",
              color: "#444957",
              fontSize: "15px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
              marginTop: "26px",
              letterSpacing: "-0.3px",
            }}>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
            </span>
          </Box>
          <Box sx={{
            position: "relative",
            display: "flex",
            width: "101px",
            height: "32px",
            padding: "3px 26px 3px 26px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "21px",
            border: `1px solid #424961`,
            marginTop: "27.41px",
            marginLeft: "43.17px"
          }}>
            <span styles={{
              color: "#424961",
              fontSize: "16.445px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "35.593px",
              letterSpacing: "0.493px"
            }}>Read More</span>
          </Box>

        </Grid>

        <Grid item xs={3} sx={{
          height: "564px", maxWidth: "381px", flexShrink: 0, marginTop: "81px",
          borderRadius: "20.937px",
          border: `1.37px solid rgba(147, 162, 211, 0.38)`,
          backgroundColor: "#FFF",
          marginLeft: "108px",
        }}>

          <img src={articles[pageNumber-1][2].img} alt="article1" style={{
            width: "326px",
            height: "257px",
            flexShrink: 0,
            borderRadius: "21px",
            background: `lightgray 50% / cover no-repeat`,
            marginLeft: "-27px",
            marginTop: "27px",
          }} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            width: "295px",
            height: "125px",
            marginTop: "35.5px",
            textAlign: "left",
            marginLeft: "50px",
          }}>
            <span style={{
              display: "flex",
              flexDirection: "column",
              color: "#0E2368",
              fontSize: "21px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "27px",
            }}>{articles[pageNumber-1][2].title}</span>
            <span style={{
              display: "flex",
              height: "295px",
              flexDirection: "column",
              color: "#444957",
              fontSize: "15px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "27px",
              marginTop: "26px",
              letterSpacing: "-0.3px",
            }}>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
            </span>
          </Box>
          <Box sx={{
            position: "relative",
            display: "flex",
            width: "101px",
            height: "32px",
            padding: "3px 26px 3px 26px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "21px",
            border: `1px solid #424961`,
            marginTop: "27.41px",
            marginLeft: "43.17px"
          }}>
            <span styles={{
              color: "#424961",
              fontSize: "16.445px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "35.593px",
              letterSpacing: "0.493px"
            }}>Read More</span>
          </Box>

        </Grid>

        <Box sx={{
          position: "absolute",
          left: "863px",
          marginTop: "901px"
        }}>
        <ArrowBackIosIcon onClick={prevPage}/>
        <span style={{
          color: "#424961",
          fontSize: "22px",
          fontFamily: "Source Sans Pro",
          fonStyle: "normal",
          fontWeight: "400",
          lineHeight: "27.218px",
          paddingRight: "10px",
          paddingBlottom: "10px",
        }}>
          {pageNumber}/2
        </span>
        <ArrowForwardIosIcon onClick={nextPage}/>
        </Box>
      </Grid>

      <Grid container sx={{ width: "100%", height: "362px", flexShrink: 0, backgroundColor: "#FFF" }}>
        <Grid item xs={12} sx={{
          height: "362px",
          width: "100%",
          flexShrink: 0,
          background: `linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 55.51%, rgba(60, 80, 157, 0.04) 100%)`
        }}>
          <img src={foodtruck} alt="foodtruck" style={{
            width: "161px",
            height: "125px",
            flexShrink: 0,
            position: "absolute",
            left: "104px",
            marginTop: "123px"
          }}/>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            textAlign: "left",
            position: "absolute",
            left: "474px",
            marginTop: "84px"
          }}>
            <span style={{
              color: "#0E2368",
              fontSize: "18.843px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "27.218px",
              letterSpacing: "0.565px"
            }}>Contact Us</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              width: "217px",
              marginTop: "14px"
            }}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              marginTop: "14px"
            }}>example2020@gmail.com</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              marginTop: "14px"
            }}>(904) 443-0343</span>

          </Box>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            textAlign: "left",
            position: "absolute",
            left: "898px",
            marginTop: "84px"
          }}>
            <span style={{
              color: "#0E2368",
              fontSize: "18.843px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "27.218px",
              letterSpacing: "0.565px"
            }}>More</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              width: "217px",
              marginTop: "14px"
            }}>About Us</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              marginTop: "14px"
            }}>Products</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              marginTop: "14px"
            }}>Career</span>
            <span style={{
              color: "#646874",
              fontSize: "14.656px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "23.031px",
              marginTop: "14px"
            }}>Contact Us</span>

          </Box>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            textAlign: "left",
            position: "absolute",
            left: "1207px",
            marginTop: "84px"
          }}>
            <span style={{
              color: "#0E2368",
              fontSize: "18.843px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "27.218px",
              letterSpacing: "0.565px"
            }}>Social Links</span>
           

          </Box>
        </Grid>
      </Grid>

    </div >
  );
}

export default App;
