import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend } from
"recharts";
import { DollarSign, Plus, Trash2, Save, Download, Pi as PieChartIcon, Circle as BarChartIcon, Plane, Hotel, UtensilsCrossed as Utensils, Ticket, ShoppingBag, Car, Bus, TrainFront as Train } from















"lucide-react";
import { formatCurrency } from "@/lib/utils";

interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
}

const categories = [
{ value: "transportation", label: "Transportation", icon: <Plane className="h-4 w-4" /> },
{ value: "accommodation", label: "Accommodation", icon: <Hotel className="h-4 w-4" /> },
{ value: "food", label: "Food & Dining", icon: <Utensils className="h-4 w-4" /> },
{ value: "activities", label: "Activities", icon: <Ticket className="h-4 w-4" /> },
{ value: "shopping", label: "Shopping", icon: <ShoppingBag className="h-4 w-4" /> },
{ value: "other", label: "Other", icon: <DollarSign className="h-4 w-4" /> }];


const COLORS = ["#1A5F7A", "#57CC99", "#FFC93C", "#FF6B6B", "#4ECDC4", "#A78BFA"];

const BudgetPlannerPage = () => {
  const [totalBudget, setTotalBudget] = useState(2000);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([
  {
    id: "item-1",
    category: "accommodation",
    description: "Hotel (7 nights)",
    amount: 700
  },
  {
    id: "item-2",
    category: "transportation",
    description: "Flights",
    amount: 500
  },
  {
    id: "item-3",
    category: "food",
    description: "Meals",
    amount: 350
  },
  {
    id: "item-4",
    category: "activities",
    description: "Tours and attractions",
    amount: 250
  }]
  );

  const addBudgetItem = () => {
    const newItem = {
      id: `item-${Date.now()}`,
      category: "other",
      description: "",
      amount: 0
    };
    setBudgetItems([...budgetItems, newItem]);
  };

  const removeBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  const updateBudgetItem = (
  id: string,
  field: string,
  value: string | number) =>
  {
    setBudgetItems(
      budgetItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [field]: field === "amount" ? Number(value) : value
          };
        }
        return item;
      })
    );
  };

  const totalSpent = budgetItems.reduce((sum, item) => sum + item.amount, 0);
  const remaining = totalBudget - totalSpent;

  const getCategoryIcon = (category: string) => {
    const categoryItem = categories.find((c) => c.value === category);
    return categoryItem?.icon || <DollarSign className="h-4 w-4" />;
  };

  // Data for charts
  const pieData = categories.map((category) => {
    const amount = budgetItems.
    filter((item) => item.category === category.value).
    reduce((sum, item) => sum + item.amount, 0);
    return {
      name: category.label,
      value: amount
    };
  }).filter((item) => item.value > 0);

  const barData = [
  { name: "Budget", value: totalBudget },
  { name: "Spent", value: totalSpent },
  { name: "Remaining", value: remaining }];


  // Calculate percentages for each category
  const categoryPercentages = categories.map((category) => {
    const amount = budgetItems.
    filter((item) => item.category === category.value).
    reduce((sum, item) => sum + item.amount, 0);
    const percentage = totalSpent > 0 ? amount / totalSpent * 100 : 0;
    return {
      ...category,
      amount,
      percentage: Math.round(percentage)
    };
  }).filter((item) => item.amount > 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Travel Budget Planner
        </h1>
        <p className="mt-2 text-muted-foreground">
          Plan and track your travel expenses to stay within your budget
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Budget Setup */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-medium">Total Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="number"
                      value={totalBudget}
                      onChange={(e) => setTotalBudget(Number(e.target.value))}
                      className="pl-10" />

                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Adjust Budget
                  </label>
                  <Slider
                    defaultValue={[totalBudget]}
                    min={500}
                    max={10000}
                    step={100}
                    onValueChange={(value) => setTotalBudget(value[0])} />

                  <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                    <span>$500</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Budget Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Budget:</span>
                      <span className="font-medium">
                        {formatCurrency(totalBudget)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Spent:</span>
                      <span className="font-medium">
                        {formatCurrency(totalSpent)}
                      </span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between">
                        <span>Remaining:</span>
                        <span
                          className={`font-bold ${
                          remaining < 0 ?
                          "text-red-500" :
                          "text-green-500"}`
                          }>

                          {formatCurrency(remaining)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Budget
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export as CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Budget Items and Charts */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="items">
            <TabsList className="w-full">
              <TabsTrigger value="items" className="flex-1">
                <DollarSign className="mr-2 h-4 w-4" />
                Budget Items
              </TabsTrigger>
              <TabsTrigger value="charts" className="flex-1">
                <PieChartIcon className="mr-2 h-4 w-4" />
                Charts & Analysis
              </TabsTrigger>
            </TabsList>

            {/* Budget Items Tab */}
            <TabsContent value="items" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-heading text-xl font-semibold">
                      Expense Items
                    </h2>
                    <Button onClick={addBudgetItem}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {budgetItems.map((item) =>
                    <div
                      key={item.id}
                      className="flex flex-wrap items-center gap-3 rounded-md border border-border p-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="flex flex-1 flex-wrap gap-3">
                          <div className="w-full sm:w-auto sm:flex-1">
                            <Select
                            value={item.category}
                            onValueChange={(value) =>
                            updateBudgetItem(item.id, "category", value)
                            }>

                              <SelectTrigger>
                                <SelectValue placeholder="Category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) =>
                              <SelectItem
                                key={category.value}
                                value={category.value}>

                                    <div className="flex items-center">
                                      {category.icon}
                                      <span className="ml-2">
                                        {category.label}
                                      </span>
                                    </div>
                                  </SelectItem>
                              )}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex-1">
                            <Input
                            value={item.description}
                            onChange={(e) =>
                            updateBudgetItem(
                              item.id,
                              "description",
                              e.target.value
                            )
                            }
                            placeholder="Description" />

                          </div>
                          <div className="w-24">
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                              type="number"
                              value={item.amount}
                              onChange={(e) =>
                              updateBudgetItem(
                                item.id,
                                "amount",
                                e.target.value
                              )
                              }
                              className="pl-10" />

                            </div>
                          </div>
                        </div>
                        <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBudgetItem(item.id)}
                        className="h-8 w-8 p-0">

                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    )}

                    {budgetItems.length === 0 &&
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-8 text-center">
                        <DollarSign className="mb-2 h-10 w-10 text-muted-foreground" />
                        <h3 className="mb-1 text-lg font-medium">
                          No budget items
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Add your first expense item to start planning
                        </p>
                        <Button onClick={addBudgetItem}>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Item
                        </Button>
                      </div>
                    }
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Charts Tab */}
            <TabsContent value="charts" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="mb-4 font-heading text-xl font-semibold">
                      Budget Analysis
                    </h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {/* Pie Chart */}
                      <div className="rounded-lg border border-border p-4">
                        <h3 className="mb-4 text-center text-lg font-medium">
                          Expense Breakdown
                        </h3>
                        <div className="h-64">
                          {pieData.length > 0 ?
                          <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({
                                  cx,
                                  cy,
                                  midAngle,
                                  innerRadius,
                                  outerRadius,
                                  percent
                                }) => {
                                  const radius =
                                  innerRadius +
                                  (outerRadius - innerRadius) * 0.5;
                                  const x =
                                  cx +
                                  radius *
                                  Math.cos(-midAngle * (Math.PI / 180));
                                  const y =
                                  cy +
                                  radius *
                                  Math.sin(-midAngle * (Math.PI / 180));
                                  return (
                                    <text
                                      x={x}
                                      y={y}
                                      fill="#fff"
                                      textAnchor={x > cx ? "start" : "end"}
                                      dominantBaseline="central"
                                      fontSize={12}>

                                        {`${(percent * 100).toFixed(0)}%`}
                                      </text>);

                                }}>

                                  {pieData.map((entry, index) =>
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]} />

                                )}
                                </Pie>
                                <Tooltip
                                formatter={(value) => [
                                formatCurrency(Number(value)),
                                "Amount"]
                                } />

                              </PieChart>
                            </ResponsiveContainer> :

                          <div className="flex h-full items-center justify-center">
                              <p className="text-muted-foreground">
                                No expense data to display
                              </p>
                            </div>
                          }
                        </div>
                      </div>

                      {/* Bar Chart */}
                      <div className="rounded-lg border border-border p-4">
                        <h3 className="mb-4 text-center text-lg font-medium">
                          Budget Overview
                        </h3>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={barData}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                              }}>

                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip
                                formatter={(value) =>
                                formatCurrency(Number(value))
                                } />

                              <Bar
                                dataKey="value"
                                fill="#1A5F7A"
                                name="Amount" />

                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    {/* Category Breakdown */}
                    <div className="mt-6">
                      <h3 className="mb-4 text-lg font-medium">
                        Category Breakdown
                      </h3>
                      <div className="space-y-3">
                        {categoryPercentages.map((category) =>
                        <div key={category.value}>
                            <div className="mb-1 flex items-center justify-between">
                              <div className="flex items-center">
                                {category.icon}
                                <span className="ml-2">{category.label}</span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">
                                  {formatCurrency(category.amount)}
                                </span>
                                <span className="ml-2 text-muted-foreground">
                                  ({category.percentage}%)
                                </span>
                              </div>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                              <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${category.percentage}%` }}>
                            </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>);

};

export default BudgetPlannerPage;