# how to run

## run script

```sh
# normal
pnpm run run --date 2024/1

# example mode
pnpm run run --date 2024/1 --example

# part 2
pnpm run run --date 2024/1 --part 2

# example mode of part 2
pnpm run run --date 2024/1 --part 2 --example

# debug mode
pnpm run run --date 2024/1 --debug

# debug mode via env variable
DEBUG=true pnpm run run --date 2024/1
```

### flags

| flag        | default-value | purpose                                                                                                   |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `--date`    | - (required)  | defines the date which's script is executed                                                               |
| `--part`    | `'1'`         | defines the part of the date                                                                              |
| `--example` | `false`       | defines that the script should run against `example.txt` (or `example.partX.txt` if `--part` is provided) |
| `--debug`   | `false`       | defines that the script should run in debug mode (logs infos within scripts)                              |

## run setup

Sets up the challenge

```sh
# {year}/{day}
pnpm run setup --date 2024/1
```

## run tests

```sh
pnpm test
```
