
def read_file(filename):
    list_parsed = []
    with open(filename) as f:
        lines = f.read().split("\n")
        gr = []
        for k, v in enumerate(lines):
            if v == "":
                list_parsed.append(gr)
                gr = []
                continue
            gr.append(int(v))
        list_parsed.append(gr)
    return list_parsed

def find_biggest_elf(list_elf):
    return max(sum(i) for i in list_elf)

def find_three_biggest_elf(list_elf):
    counter = 0
    m = []
    s = list(map(sum, list_elf))
    for _ in s:
        if counter == 3:
            break
        m.append(max(s))
        s.remove(max(s))
        counter += 1
    return sum(m) 


if __name__ == "__main__":
    l = read_file("input.txt")
    print(find_three_biggest_elf(l))