package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/jaswdr/faker"
)

func main() {

	fake := faker.New()
	file, err := os.Create("data.js")

	if err != nil {
		fmt.Println(err)
	}
	file.WriteString("const UserData = [\n")
	DataLength := 500
	for i := 0; i < DataLength; i++ {
		fake.Company().JobTitle()
		fake.Time().Year()
		file.WriteString("	new User('" + fake.Person().FirstName() + "', '" + fake.Person().LastName() + "', " + strconv.Itoa(fake.Time().Year()) + " , '" + fake.Gender().Name() + "','" + fake.Company().JobTitle() + "'),\n")
	}

	file.WriteString("];")
	file.Close()
}
