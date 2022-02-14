import { Button, List, ListItem, Drawer } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';


const useStyles = makeStyles((theme) => ({    
    drawer: {
        width: "200px",
        display: "flex",
        backgroundColor: "salmon",
    },
    button: {
        color: "#fff",
        alignItems: "center",
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontFamily: "Futura-Book",
        fontSize: 18         
    },
    icon: {
        color: "#000",
        width: 15,
        height: 15,
        display: 'flex',
        alignItems: 'center',
        marginRight: 30
    },
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,      
        paddingLeft: "20px"
      },
      active: {
        color: "#2B99CD",
        borderRadius: "0px",
        backgroundColor: "#E5F6FD",
        borderRight: '3px solid rgb(38, 135, 196)',    
        fontFamily: "Futura-Book",
        fontWeight: "bold",
        '& $icon': {
          color: "#2B99CD",
        }
      }
}))

const pages = [
    {
        title: "Home",
        href: "/",
        icon: <HomeIcon style={{marginRight: 10}}/>
    },
    {
        title: "About",
        href: "/about",
        icon: <InfoIcon style={{marginRight: 10}}/>
    },
    {
        title: "Profile",
        href: "/profile",
        icon: <PersonIcon style={{marginRight: 10}}/>
    },
    {
        title: "Category",
        href: "/users",
        icon: <ListAltIcon style={{marginRight: 10}}/>
    },
]


const sideBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Drawer
                anchor="left"
                classes={{ paper: classes.drawer }}
                open={true}
                variant={"permanent"}
                PaperProps={{ elevation: 3 }}
            >
                <List>
                    {pages.map((item, index) => (
                        <ListItem
                        className={classes.item}
                        disableGutters
                            key={index.toString()}>
                            <Button
                            activeClassName="highlighted"                           
                            className={classes.button}
                                href={item.href}
                                startIcon={item.icon}>                                   
                                {item.title}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

sideBar.propTypes = {
    className: PropTypes.string
}

export default sideBar;