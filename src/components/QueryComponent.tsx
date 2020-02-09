import React, { useState, useRef, useMemo } from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  makeStyles,
  Theme,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  body: {},
  header: {
    textAlign: "left"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  button: {
    justifyContent: "flex-end"
  }
}));

interface Props {
  title: string;
  inputLabel: string;
  execute: (param: any) => Promise<any>;
}

export function QueryComponent({ title, inputLabel, execute }: Props) {
  const classes = useStyles();

  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const disabled = useMemo(() => {
    return !input || input.trim() === "";
  }, [input]);

  const handleClick = async () => {
    try {
      setError("");
      const result = await execute(input);
      if (result.data instanceof Array) setResult(result.data);
      else setResult([result.data]);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Card>
      <CardContent className={classes.body}>
        <Typography color="textPrimary" gutterBottom className={classes.header}>
          {title}
        </Typography>

        <TextField
          required
          id="standard-required"
          label={inputLabel}
          defaultValue="Horror"
          value={input}
          fullWidth
          onChange={handleChange}
        />

        {result && result.length > 0 && (
          <>
            <Typography variant="h6" className={classes.title}>
              Result
            </Typography>
            <div>
              <List>
                {result.map((item, ind) => (
                  <ListItem key={ind}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </div>
          </>
        )}
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          size="small"
          variant="outlined"
          disabled={disabled}
          onClick={handleClick}
        >
          Show
        </Button>
      </CardActions>

      {error && <Typography color="error">{error}</Typography>}
    </Card>
  );
}
