"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, ArrowRightLeft } from "lucide-react"

const ethiopianMonths = [
  "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yekatit",
  "Megabit", "Miazia", "Ginbot", "Sene", "Hamle", "Nehase", "Pagume"
]

const gregorianMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default function CalendarConverter() {
  const [currentGregorian, setCurrentGregorian] = useState({ day: 0, month: 0, year: 0 })
  const [currentEthiopian, setCurrentEthiopian] = useState({ day: 0, month: 0, year: 0 })
  
  // Input states for conversion
  const [gregorianInput, setGregorianInput] = useState({ day: "", month: "", year: "" })
  const [ethiopianResult, setEthiopianResult] = useState({ day: 0, month: 0, year: 0 })

  // Get current date in both calendars
  useEffect(() => {
    const now = new Date()
    const gregDay = now.getDate()
    const gregMonth = now.getMonth() + 1
    const gregYear = now.getFullYear()

    setCurrentGregorian({ day: gregDay, month: gregMonth, year: gregYear })
    
    // Convert to Ethiopian calendar
    const ethDate = gregorianToEthiopian(gregDay, gregMonth, gregYear)
    setCurrentEthiopian(ethDate)
  }, [])

  // Ethiopian calendar conversion algorithm
  function gregorianToEthiopian(day: number, month: number, year: number) {
    const ethYear = year - 8 - (month < 9 || (month === 9 && day < 11) ? 1 : 0)
    
    let ethMonth
    let ethDay
    
    if (month === 9 && day >= 11) {
      ethMonth = 1
      ethDay = day - 10
    } else if (month === 10 && day <= 10) {
      ethMonth = 1
      ethDay = 20 + day
    } else if (month === 10 && day >= 11) {
      ethMonth = 2
      ethDay = day - 10
    } else if (month === 11 && day <= 9) {
      ethMonth = 2
      ethDay = 21 + day
    } else if (month === 11 && day >= 10) {
      ethMonth = 3
      ethDay = day - 9
    } else if (month === 12 && day <= 9) {
      ethMonth = 3
      ethDay = 21 + day
    } else if (month === 12 && day >= 10) {
      ethMonth = 4
      ethDay = day - 9
    } else if (month === 1 && day <= 8) {
      ethMonth = 4
      ethDay = 22 + day
    } else if (month === 1 && day >= 9) {
      ethMonth = 5
      ethDay = day - 8
    } else if (month === 2 && day <= 7) {
      ethMonth = 5
      ethDay = 23 + day
    } else if (month === 2 && day >= 8) {
      ethMonth = 6
      ethDay = day - 7
    } else if (month === 3 && day <= 9) {
      ethMonth = 6
      ethDay = 21 + day
    } else if (month === 3 && day >= 10) {
      ethMonth = 7
      ethDay = day - 9
    } else if (month === 4 && day <= 8) {
      ethMonth = 7
      ethDay = 22 + day
    } else if (month === 4 && day >= 9) {
      ethMonth = 8
      ethDay = day - 8
    } else if (month === 5 && day <= 8) {
      ethMonth = 8
      ethDay = 23 + day
    } else if (month === 5 && day >= 9) {
      ethMonth = 9
      ethDay = day - 8
    } else if (month === 6 && day <= 7) {
      ethMonth = 9
      ethDay = 23 + day
    } else if (month === 6 && day >= 8) {
      ethMonth = 10
      ethDay = day - 7
    } else if (month === 7 && day <= 7) {
      ethMonth = 10
      ethDay = 24 + day
    } else if (month === 7 && day >= 8) {
      ethMonth = 11
      ethDay = day - 7
    } else if (month === 8 && day <= 6) {
      ethMonth = 11
      ethDay = 24 + day
    } else if (month === 8 && day >= 7) {
      ethMonth = 12
      ethDay = day - 6
    } else if (month === 9 && day <= 5) {
      ethMonth = 12
      ethDay = 25 + day
    } else {
      ethMonth = 13
      ethDay = day - 5
    }

    return { day: ethDay, month: ethMonth, year: ethYear }
  }

  function handleConvert() {
    const day = parseInt(gregorianInput.day)
    const month = parseInt(gregorianInput.month)
    const year = parseInt(gregorianInput.year)

    if (day && month && year && day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
      const result = gregorianToEthiopian(day, month, year)
      setEthiopianResult(result)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Current Date Display */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-ethiopian-green/20 bg-gradient-to-br from-ethiopian-green/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-ethiopian-green">
              <Calendar className="w-5 h-5" />
              Today - Gregorian Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-foreground">{currentGregorian.day}</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                {gregorianMonths[currentGregorian.month - 1]}
              </p>
              <p className="text-xl text-muted-foreground">{currentGregorian.year}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-ethiopian-yellow/20 bg-gradient-to-br from-ethiopian-yellow/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-ethiopian-yellow">
              <Calendar className="w-5 h-5" />
              Today - Ethiopian Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-foreground">{currentEthiopian.day}</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                {ethiopianMonths[currentEthiopian.month - 1]}
              </p>
              <p className="text-xl text-muted-foreground">{currentEthiopian.year}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Converter Tool */}
      <Card className="border-2 border-ethiopian-red/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-ethiopian-red">
            <ArrowRightLeft className="w-5 h-5" />
            Calendar Converter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Convert Gregorian Date
              </h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="day">Day</Label>
                  <Input
                    id="day"
                    type="number"
                    min="1"
                    max="31"
                    placeholder="DD"
                    value={gregorianInput.day}
                    onChange={(e) => setGregorianInput({ ...gregorianInput, day: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="month">Month</Label>
                  <Input
                    id="month"
                    type="number"
                    min="1"
                    max="12"
                    placeholder="MM"
                    value={gregorianInput.month}
                    onChange={(e) => setGregorianInput({ ...gregorianInput, month: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="YYYY"
                    value={gregorianInput.year}
                    onChange={(e) => setGregorianInput({ ...gregorianInput, year: e.target.value })}
                  />
                </div>
                <Button 
                  onClick={handleConvert}
                  className="w-full bg-ethiopian-green hover:bg-ethiopian-green/90"
                >
                  Convert to Ethiopian
                </Button>
              </div>
            </div>

            {/* Result Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Ethiopian Date Result
              </h3>
              {ethiopianResult.year > 0 ? (
                <div className="p-6 rounded-lg bg-muted/50 border-2 border-ethiopian-yellow/30 text-center space-y-3">
                  <p className="text-5xl font-bold text-foreground">
                    {ethiopianResult.day}
                  </p>
                  <p className="text-2xl font-semibold text-ethiopian-yellow">
                    {ethiopianMonths[ethiopianResult.month - 1]}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    {ethiopianResult.year}
                  </p>
                </div>
              ) : (
                <div className="p-6 rounded-lg bg-muted/30 border-2 border-dashed border-muted-foreground/30 text-center">
                  <p className="text-muted-foreground">
                    Enter a Gregorian date and click convert to see the Ethiopian equivalent
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Section */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border border-ethiopian-green/20">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-ethiopian-green mb-2">13</p>
            <p className="text-sm text-muted-foreground">Months in Ethiopian Calendar</p>
          </CardContent>
        </Card>
        <Card className="border border-ethiopian-yellow/20">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-ethiopian-yellow mb-2">7-8</p>
            <p className="text-sm text-muted-foreground">Years Behind Gregorian</p>
          </CardContent>
        </Card>
        <Card className="border border-ethiopian-red/20">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-ethiopian-red mb-2">30</p>
            <p className="text-sm text-muted-foreground">Days per Month (except Pagume)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}