# Graph Report - g7  (2026-09-28)

## Corpus Check
- 83 files · ~111,420 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 2, .bat 2, .db 1)

## Summary
- 631 nodes · 1216 edges · 38 communities (32 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- dependencies
- react
- carousel.tsx
- package.json
- sidebar.tsx
- use-toast.ts
- command.tsx
- navigation-menu.tsx
- compilerOptions
- cn()
- components.json
- menubar.tsx
- next
- context-menu.tsx
- dropdown-menu.tsx
- form.tsx
- graphify_pipeline.py
- devDependencies
- chart.tsx
- drawer.tsx
- sheet.tsx
- scripts
- utils.ts
- eslint.config.mjs
- lucide-react
- seed.ts
- input-otp.tsx
- accordion.tsx
- popover.tsx
- avatar.tsx
- collapsible.tsx
- hover-card.tsx
- resizable.tsx
- sonner.tsx
- tailwind.config.ts
- setup-windows.ps1
- @radix-ui/react-aspect-ratio
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 232 edges
2. `react` - 49 edges
3. `Home()` - 23 edges
4. `lucide-react` - 22 edges
5. `Button()` - 17 edges
6. `compilerOptions` - 17 edges
7. `SessionPage()` - 11 edges
8. `scripts` - 10 edges
9. `class-variance-authority` - 9 edges
10. `buttonVariants` - 9 edges

## Surprising Connections (you probably didn't know these)
- `SocketDemo()` --calls--> `Button()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/button.tsx
- `SocketDemo()` --calls--> `Card()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `CardContent()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `CardHeader()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `CardTitle()`  [EXTRACTED]
  examples/websocket/page.tsx → src/components/ui/card.tsx

## Import Cycles
- None detected.

## Communities (38 total, 6 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.03
Nodes (71): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable (+63 more)

### Community 1 - "react"
Cohesion: 0.09
Nodes (44): Message, SocketDemo(), @radix-ui/react-scroll-area, react, categories, difficulties, experienceLevels, focusAreas (+36 more)

### Community 2 - "carousel.tsx"
Cohesion: 0.07
Nodes (36): embla-carousel-react, @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter() (+28 more)

### Community 3 - "package.json"
Cohesion: 0.05
Nodes (39): name, private, version, axios, date-fns, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities (+31 more)

### Community 4 - "sidebar.tsx"
Cohesion: 0.08
Nodes (33): @radix-ui/react-tooltip, SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction(), SidebarGroupContent() (+25 more)

### Community 5 - "use-toast.ts"
Cohesion: 0.10
Nodes (31): @radix-ui/react-toast, src_app_globals, geistMono, geistSans, metadata, RootLayout(), Toast, ToastAction (+23 more)

### Community 6 - "command.tsx"
Cohesion: 0.14
Nodes (18): cmdk, @radix-ui/react-dialog, Command(), CommandDialog(), CommandGroup(), CommandInput(), CommandItem(), CommandList() (+10 more)

### Community 7 - "navigation-menu.tsx"
Cohesion: 0.12
Nodes (18): class-variance-authority, @radix-ui/react-navigation-menu, @radix-ui/react-toggle, @radix-ui/react-toggle-group, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem() (+10 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 9 - "cn()"
Cohesion: 0.19
Nodes (16): @radix-ui/react-slot, BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), Table() (+8 more)

### Community 10 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 11 - "menubar.tsx"
Cohesion: 0.12
Nodes (13): @radix-ui/react-menubar, Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem() (+5 more)

### Community 12 - "next"
Cohesion: 0.16
Nodes (11): nextConfig, ref_http, next, socket.io, z-ai-web-dev-sdk, createCustomServer(), buildAIPrompt(), extractQuestionsFromText() (+3 more)

### Community 13 - "context-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-context-menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+2 more)

### Community 14 - "dropdown-menu.tsx"
Cohesion: 0.12
Nodes (10): @radix-ui/react-dropdown-menu, DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut() (+2 more)

### Community 15 - "form.tsx"
Cohesion: 0.18
Nodes (13): @radix-ui/react-label, react-hook-form, FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext (+5 more)

### Community 16 - "graphify_pipeline.py"
Cohesion: 0.13
Nodes (13): graphify_analyze, graphify_build, graphify_cluster, graphify_detect, graphify_export, graphify_extract, graphify_llm, graphify_report (+5 more)

### Community 17 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, @eslint/eslintrc, nodemon, tailwindcss, @tailwindcss/postcss, tw-animate-css (+4 more)

### Community 18 - "chart.tsx"
Cohesion: 0.24
Nodes (11): recharts, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent() (+3 more)

### Community 19 - "drawer.tsx"
Cohesion: 0.20
Nodes (8): vaul, DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle()

### Community 20 - "sheet.tsx"
Cohesion: 0.26
Nodes (9): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle() (+1 more)

### Community 21 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, db:generate, db:migrate, db:push, db:reset, db:seed, dev (+2 more)

### Community 22 - "utils.ts"
Cohesion: 0.22
Nodes (6): clsx, @radix-ui/react-slider, @radix-ui/react-switch, tailwind-merge, Slider(), Switch()

### Community 23 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): compat, __dirname, eslintConfig, __filename, @eslint/eslintrc, ref_path, ref_url

### Community 24 - "lucide-react"
Cohesion: 0.25
Nodes (6): lucide-react, @radix-ui/react-checkbox, @radix-ui/react-radio-group, Checkbox(), RadioGroup(), RadioGroupItem()

### Community 25 - "seed.ts"
Cohesion: 0.29
Nodes (4): prisma, @prisma/client, db, globalForPrisma

### Community 26 - "input-otp.tsx"
Cohesion: 0.33
Nodes (4): input-otp, InputOTP(), InputOTPGroup(), InputOTPSlot()

### Community 27 - "accordion.tsx"
Cohesion: 0.33
Nodes (4): @radix-ui/react-accordion, AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 29 - "avatar.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-avatar, Avatar(), AvatarFallback(), AvatarImage()

### Community 32 - "resizable.tsx"
Cohesion: 0.40
Nodes (3): react-resizable-panels, ResizableHandle(), ResizablePanelGroup()

### Community 34 - "tailwind.config.ts"
Cohesion: 0.50
Nodes (3): tailwindcss, tailwindcss-animate, config

### Community 35 - "setup-windows.ps1"
Cohesion: 0.83
Nodes (3): Install-Chocolatey(), Install-ChocoPackage(), Test-Command()

## Knowledge Gaps
- **204 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+199 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 269 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn()` to `react`, `carousel.tsx`, `sidebar.tsx`, `use-toast.ts`, `command.tsx`, `navigation-menu.tsx`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `chart.tsx`, `drawer.tsx`, `sheet.tsx`, `utils.ts`, `lucide-react`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `avatar.tsx`, `hover-card.tsx`, `resizable.tsx`?**
  _High betweenness centrality (0.289) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `carousel.tsx`, `package.json`, `sidebar.tsx`, `use-toast.ts`, `command.tsx`, `navigation-menu.tsx`, `cn()`, `menubar.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `form.tsx`, `chart.tsx`, `drawer.tsx`, `sheet.tsx`, `utils.ts`, `lucide-react`, `input-otp.tsx`, `accordion.tsx`, `popover.tsx`, `avatar.tsx`, `hover-card.tsx`, `resizable.tsx`?**
  _High betweenness centrality (0.172) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.028169014084507043 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.08953418027828192 - nodes in this community are weakly interconnected._
- **Should `carousel.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06976744186046512 - nodes in this community are weakly interconnected._