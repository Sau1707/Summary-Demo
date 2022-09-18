import { Dialog, DialogContent, DialogTitle, Slider, Grid, OutlinedInput, Input } from '@mui/material';
import { Color, ColorPicker, createColor } from "material-ui-color";
import { Typography } from '@material-ui/core';
import { useState, useContext } from "react"

import { GlobalDataContext } from '../../logic/Contex';

import Demo from "./Element"
import DialogMenu from '../../components/DialogMenu';

const [minHeight, maxHeight] = [50, 300]

export default function DummyDialog(props: any) {
    const [context] = useContext(GlobalDataContext);

    const [color, setColor] = useState(createColor(props.color))
    const [height, setHeight] = useState(props.height)
    const [text, setText] = useState(props.text)

    const handleColorChange = (newValue: Color) => {
        setColor(newValue);
    }

    const handleHeightChange = (event: Event, newValue: number | number[]) => {
        setHeight(newValue)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (height < minHeight) {
            setHeight(minHeight);
        } else if (height > maxHeight) {
            setHeight(maxHeight);
        }
    };

    const handleDialogClose = () => {
        context.saveDialog({
            color: `#${color.hex}`,
            height: height,
            text: text,
        })
    }

    const handleTextChange = (e: any) => {
        setText(e.target.value)
    }

    return (
        <Dialog
            fullWidth
            maxWidth="lg"
            open={props.open}
            onClose={handleDialogClose}
        >
            <DialogTitle> Demo element </DialogTitle>
            <DialogMenu
                id={props.id}
                onSave={handleDialogClose}
            />
            <DialogContent>
                <Grid container spacing={8} alignItems="center">
                    <Grid item>
                        <Typography >Text: </Typography>
                        <OutlinedInput value={text} onChange={handleTextChange} />
                    </Grid>
                    <Grid item>
                        <Typography > Color: </Typography>
                        <ColorPicker value={color} onChange={handleColorChange} />
                    </Grid>
                    <Grid item xs>
                        <Typography component="span"> Height: {"  "}
                            <Input
                                value={height}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
                                    min: minHeight,
                                    max: maxHeight,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Typography>
                        <Slider
                            value={typeof height === 'number' ? height : 0}
                            onChange={handleHeightChange}
                            aria-labelledby="input-slider"
                            min={minHeight}
                            max={maxHeight}
                        />
                    </Grid>
                </Grid>
                <h1> Preview: </h1>
                <div style={{ margin: "auto", width: 354.35 }}>
                    <Demo height={height} color={`#${color.hex}`} text={text}></Demo>
                </div>
            </DialogContent >
        </Dialog>

    )
}