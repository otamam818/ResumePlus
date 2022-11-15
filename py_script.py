import sys
from pyperclip import copy
from rich.console import Console
from rich.panel import Panel

console = Console()

COMMANDS: str = """
-C -> copy comment (JS notation)
"""

def main(args):
    if (len(args) < 2):
        show_invalid_message()
        return
    try:
        if (args[1] == "-C"):
            copy_js_comment()
    except KeyboardInterrupt:
        # Leave the program with a new line
        console.print("\n[b]Bye![/]")

def copy_js_comment(width: int = 50):
    while True:
        title = ' ' + input("Enter title: ").strip() + ' '
        size = (width - len(title))//2
        sep1 = '-' * (size)
        sep2 = '-' * (size+1) if len(title)%2 == 1 else sep1
        finstr = "/* " + sep1 + title + sep2 + " */"
        copy(finstr)
        g = "#9ccc65"
        console.print(Panel.fit(f"[{g}]{finstr}[/]", title="Copied!"))

def show_invalid_message():
    y = "#ffee58" # yellow
    b = "#5c6bc0" # blue
    g = "#9ccc65" # green
    console.print(f"[b]Usage:[/]\n[{y}]python3[/] ", end='')
    console.print(f"[{b}]py_script.py[/] [{g}]<command>[/]")
    console.print(f"[b]Commands:[/]{COMMANDS}", end='')

if __name__ == "__main__":
    main(sys.argv)

